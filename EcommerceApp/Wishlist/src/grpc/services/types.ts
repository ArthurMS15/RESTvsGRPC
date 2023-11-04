import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js"

export type WishlistService = {
  getWishlistItemsByUser: (call: ServerUnaryCall<any, any>, callback: sendUnaryData<any>) => Promise<void>;
  createWishlistItem: (call: ServerUnaryCall<any, any>, callback: sendUnaryData<any>) => Promise<void>;
  deleteWishlistItem: (call: ServerUnaryCall<any, any>, callback: sendUnaryData<any>) => Promise<void>;
}