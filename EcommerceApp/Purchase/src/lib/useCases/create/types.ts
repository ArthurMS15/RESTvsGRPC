import { Purchase } from '$/lib/domain/entities/purchase';
import { SendNotification } from '$/lib/infra/notificationClient/types';

export type CreateUseCase = (data: CreateUseCase.Data, sendNotification: SendNotification) => Promise<Purchase>;

export namespace CreateUseCase {
  export type Data = {
    price: number;
    userId: string;
  }
}