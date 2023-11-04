import { loadPackageDefinition } from "@grpc/grpc-js"
import { loadSync } from "@grpc/proto-loader"

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
