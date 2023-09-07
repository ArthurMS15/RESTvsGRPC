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
let responseTimes = []; // To track each request's response time

for (let i = 0; i < NUM_REQUESTS; i++) {
  const reqStartTime = Date.now();
  client.GetProductInfo({ product_id: `${i}` }, (error, response) => {
    const reqEndTime = Date.now();
    responseTimes.push(reqEndTime - reqStartTime);
    
    if (error) {
      console.error('Error in request:', error);
    } else {
      completedRequests++;
      if (completedRequests === NUM_REQUESTS) {
        let endTime = Date.now();
        console.log(`gRPC: ${NUM_REQUESTS} requests took ${(endTime - startTime)}ms`);
        
        // Calculate and print the additional metrics
        responseTimes.sort((a, b) => a - b); // Sort times
        const min = responseTimes[0];
        const max = responseTimes[NUM_REQUESTS - 1];
        const median = responseTimes[Math.floor(NUM_REQUESTS / 2)];
        const mean = responseTimes.reduce((sum, time) => sum + time, 0) / NUM_REQUESTS;
        // TODO: You might want to calculate standard deviation as well

        console.log(`Connection Times (ms)
                     min    mean    median   max
          Total:     ${min}   ${mean.toFixed(2)}   ${median}    ${max}`);

        console.log(`
          Percentage of the requests served within a certain time (ms)
            50%   ${responseTimes[Math.floor(NUM_REQUESTS * 0.50)]}
            66%   ${responseTimes[Math.floor(NUM_REQUESTS * 0.66)]}
            75%   ${responseTimes[Math.floor(NUM_REQUESTS * 0.75)]}
            80%   ${responseTimes[Math.floor(NUM_REQUESTS * 0.80)]}
            90%   ${responseTimes[Math.floor(NUM_REQUESTS * 0.90)]}
            95%   ${responseTimes[Math.floor(NUM_REQUESTS * 0.95)]}
            98%   ${responseTimes[Math.floor(NUM_REQUESTS * 0.98)]}
            99%   ${responseTimes[Math.floor(NUM_REQUESTS * 0.99)]}
          100%   ${max} (longest request)`);
      }
    }
  });
}
