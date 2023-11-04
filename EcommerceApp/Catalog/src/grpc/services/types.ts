import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js"

export type CatalogService = {
  searchCatalog: (call: ServerUnaryCall<any, any>, callback: sendUnaryData<any>) => Promise<void>;
}