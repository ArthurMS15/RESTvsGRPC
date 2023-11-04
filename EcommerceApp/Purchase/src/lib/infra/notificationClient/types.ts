import { Purchase } from '$/lib/domain/entities/purchase';

export type SendNotification = (data: SendNotification.Data) => Promise<void>;

export namespace SendNotification {
  export type Data = {
    userId: string;
    purchaseId: string;
    status: Purchase["status"];
  };
}