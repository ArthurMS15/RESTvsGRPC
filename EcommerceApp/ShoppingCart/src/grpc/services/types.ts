import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js"

export type ShoppingCartService = {
  getShoppingCartsByUser: (call: ServerUnaryCall<any, any>, callback: sendUnaryData<any>) => Promise<void>;
  createShoppingCart: (call: ServerUnaryCall<any, any>, callback: sendUnaryData<any>) => Promise<void>;
  deleteShoppingCart: (call: ServerUnaryCall<any, any>, callback: sendUnaryData<any>) => Promise<void>;
  updateShoppingCart: (call: ServerUnaryCall<any, any>, callback: sendUnaryData<any>) => Promise<void>;
}