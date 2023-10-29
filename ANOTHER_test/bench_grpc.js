const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const async = require('async'); // Adicionado

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

const NUM_REQUESTS = 100000;
const PARALLEL_LIMIT = 1000; // Número máximo de requisições paralelas

let responseTimes = []; // Para rastrear o tempo de resposta de cada solicitação

const makeRequest = (productId, callback) => {
  const reqStartTime = Date.now();
  client.GetProductInfo({ product_id: `${productId}` }, (error, response) => {
    const reqEndTime = Date.now();
    responseTimes.push(reqEndTime - reqStartTime);
    callback(error);
  });
};

let startTime = Date.now();

// Usando o método eachLimit da biblioteca async para controlar o número de requisições paralelas
async.eachLimit([...Array(NUM_REQUESTS).keys()], PARALLEL_LIMIT, makeRequest, (error) => {
  if (error) {
    console.error('Error during requests:', error);
  }

  let endTime = Date.now();
  console.log(`gRPC: ${NUM_REQUESTS} requests took ${(endTime - startTime)}ms`);

  responseTimes.sort((a, b) => a - b); // Ordenar tempos
  const min = responseTimes[0];
  const max = responseTimes[NUM_REQUESTS - 1];
  const median = responseTimes[Math.floor(NUM_REQUESTS / 2)];
  const mean = responseTimes.reduce((sum, time) => sum + time, 0) / NUM_REQUESTS;

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
});
