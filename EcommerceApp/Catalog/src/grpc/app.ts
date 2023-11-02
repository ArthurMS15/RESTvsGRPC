import { loadPackageDefinition, Server, ServerCredentials } from "@grpc/grpc-js"
import { loadSync } from "@grpc/proto-loader"
import { shoppingCartService } from './services/shopping-cart-service';

const PROTO_PATH = __dirname + '/protos/shoppingCart.proto';

const packageDefinition = loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
  });
    
const protoDescriptor = loadPackageDefinition(packageDefinition);
const ecommerce = protoDescriptor.ecommerce;

const server = new Server();

server.addService((ecommerce as any).ShoppingCartService.service, shoppingCartService)

export default server;

