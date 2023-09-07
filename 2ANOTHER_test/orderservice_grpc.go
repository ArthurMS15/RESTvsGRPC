package main

import (
	"log"
	"net"

	"context"

	"gitlab.com/timbastin/bachelorarbeit/common"
	"gitlab.com/timbastin/bachelorarbeit/config"
	"gitlab.com/timbastin/bachelorarbeit/pb"
	"gitlab.cm/timbastin/bachelorarbeit/utils"
	"google.golang.org/grpc"
)

type OrderServiceServer struct {
	CustomerService pb.CustomerServiceClient
	ShippingService pb.ShippingServiceClient
	pb.UnimplementedOrderServiceServer
}

func (s *OrderServiceServer) SubmitOrder(ctx context.Context, request *pb.SubmitOrderRequest) (*pb.SuccessReply, error) {
	log.Println("(GRPC) received new order")
	if s.CustomerService == nil {
		s.CustomerService, _ = common.NewCustomerServiceClient()
	}
	if s.ShippingService == nil {
		s.ShippingService, _ = common.NewShippingServiceClient()
	}

	checkIfInStock(1)

	// call the product service on each iteration to decrement the product.
	_, err := s.CustomerService.CreateAndProcessBilling(ctx, &pb.BillingRequest{
		BillingInformation: request.BillingInformation,
		Products:           request.Products,
	})

	utils.FailOnError(err, "could not process billing")

	// trigger the shipping job.
	_, err = s.ShippingService.CreateShippingJob(ctx, &pb.ShippingJob{
		BillingInformation: request.BillingInformation,
		Products:           request.Products,
	})

	utils.FailOnError(err, "could not create shipping job")

	handleProductDecrement(1)

	return &pb.SuccessReply{Success: true}, nil
}

func startGrpcServer() {
	listen, err := net.Listen("tcp", config.MustGet("orderservice.grpc.port").(string))
	if err != nil {
		log.Fatalf("could not listen: %v", err)
	}

	grpcServer := grpc.NewServer()

	orderService := OrderServiceServer{}
	// inject the clients into the server
	pb.RegisterOrderServiceServer(grpcServer, &orderService)

	// start the server
	log.Println("started grpc server")
	if err := grpcServer.Serve(listen); err != nil {
		log.Fatalf("could not start grpc server: %v", err)
	}
}