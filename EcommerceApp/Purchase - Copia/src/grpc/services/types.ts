import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";

export type PurchaseService = {
  createPurchase: (call: ServerUnaryCall<any, any>, callback: sendUnaryData<any>) => Promise<void>;
}