const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = './strecommerce.proto';
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

const client = new ecommerceProto.EcommerceService('localhost:50052', grpc.credentials.createInsecure());

const NUM_REQUESTS = 1000;  

let startTime = Date.now();
let completedRequests = 0;

for (let i = 0; i < NUM_REQUESTS; i++) {
  const call = client.GetProductStream({ product_id: `${i}` });
  
  call.on('data', (response) => {
    // Handle streamed back response
    console.log(response);
  });
  
  call.on('end', () => {
    completedRequests++;
    if (completedRequests === NUM_REQUESTS) {
      let endTime = Date.now();
      console.log(`gRPC Streaming: ${NUM_REQUESTS} requests took ${(endTime - startTime)}ms`);
    }
  });
}
