import { loadPackageDefinition, Server, ServerCredentials } from "@grpc/grpc-js"
import { loadSync } from "@grpc/proto-loader"
import { wishlistService } from './services/wishlist-service';

const PROTO_PATH = __dirname + '/protos/wishlist.proto';

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

server.addService((ecommerce as any).WishlistService.service, wishlistService)

export default server;

