import { loadPackageDefinition, Server } from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";
import { notificationService } from './services/notification-service';

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
const ecommerce = protoDescriptor.ecommerce;

const server = new Server();

server.addService((ecommerce as any).NotificationService.service, notificationService);

export default server;

