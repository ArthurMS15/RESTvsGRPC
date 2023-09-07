const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const fs = require('fs');
const csv = require('csv-parser');

const PROTO_PATH = 'strecommerce.proto';
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

const ecommerceProto = grpc.loadPackageDefinition(packageDefinition).ecommerce;
const server = new grpc.Server();

let data = [];

fs.createReadStream('E-commerce Dataset.csv')
  .pipe(csv())
  .on('data', (row) => {
    data.push(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');

    server.bindAsync('127.0.0.1:50052', grpc.ServerCredentials.createInsecure(), () => {
      server.start();
      console.log('gRPC server started on 127.0.0.1:50052');
    });
  });

server.addService(ecommerceProto.EcommerceService.service, {
  GetProductStream: (call) => {
    const productId = parseInt(call.request.product_id, 10);
    if (data[productId]) {
      for (let i = productId; i < productId + 10 && i < data.length; i++) {  // Send next 10 products as an example
        call.write(data[i]);
      }
    }
    call.end();
  },
});
