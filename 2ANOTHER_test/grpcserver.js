const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const SERVER_ADDRESS = '0.0.0.0:50051';

const PRODUCTS = {
    '1001': {name: 'Laptop', price: 999.99, stock: 15},
    '1002': {name: 'Mouse', price: 19.99, stock: 200},
    // ... more products ...
};

const protoPath = 'path_to_product.proto';
const packageDefinition = protoLoader.loadSync(protoPath, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

const productProto = grpc.loadPackageDefinition(packageDefinition).product;

const server = new grpc.Server();

const getProduct = (call, callback) => {
    const product = PRODUCTS[call.request.product_id];
    if (product) {
        callback(null, product);
    } else {
        callback({
            code: grpc.status.NOT_FOUND,
            details: 'Product Not Found'
        });
    }
};

server.addService(productProto.ProductService.service, { GetProduct: getProduct });
server.bind(SERVER_ADDRESS, grpc.ServerCredentials.createInsecure());
console.log(`Server running at ${SERVER_ADDRESS}`);
server.start();
