const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const fs = require('fs');
const csv = require('csv-parser');

const PROTO_PATH = 'ecommerce.proto';

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

const server = new grpc.Server();

let data = [];

fs.createReadStream('E-commerce Dataset.csv')
  .pipe(csv())
  .on('data', (row) => {
    data.push(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');

    server.bindAsync('127.0.0.1:50051', grpc.ServerCredentials.createInsecure(), () => {
      server.start();
      console.log('gRPC server started on 127.0.0.1:50051');
    });
  });

server.addService(ecommerceService.service, {
  GetProductInfo: (call, callback) => {
    const product = data[parseInt(call.request.product_id, 10)];
    if (product) {
      callback(null, product);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not Found"
      });
    }
  },
});
