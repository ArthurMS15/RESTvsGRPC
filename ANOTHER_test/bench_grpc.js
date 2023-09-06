const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = './ecommerce.proto';

const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    }
);

const ecommerceService = grpc.loadPackageDefinition(packageDefinition).ecommerce.EcommerceService;

const client = new ecommerceService('localhost:50051', grpc.credentials.createInsecure());

const NUM_REQUESTS = 1000;

let startTime = Date.now();
let completedRequests = 0;

for (let i = 0; i < NUM_REQUESTS; i++) {
  client.GetProductInfo({ product_id: `${i}` }, (error, response) => {
    if (error) {
      console.error('Error in request:', error);
    } else {
      completedRequests++;
      if (completedRequests === NUM_REQUESTS) {
        let endTime = Date.now();
        console.log(`gRPC: ${NUM_REQUESTS} requests took ${(endTime - startTime)}ms`);
      }
    }
  });
}
