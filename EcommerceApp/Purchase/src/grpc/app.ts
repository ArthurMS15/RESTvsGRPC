import { loadPackageDefinition, Server } from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";
import { purchaseService } from './services/purchase-service';

const PROTO_PATH = "../proto/ecommerce.proto";

const packageDefinition = loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  });

const protoDescriptor = loadPackageDefinition(packageDefinition);
export const ecommerce = protoDescriptor.ecommerce;

const server = new Server();

server.addService((ecommerce as any).PurchaseService.service, purchaseService)

export default server;

