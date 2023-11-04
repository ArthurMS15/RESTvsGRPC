import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";

export type NotificationService = {
  createNotification: (call: ServerUnaryCall<any, any>, callback: sendUnaryData<any>) => Promise<void>;
}