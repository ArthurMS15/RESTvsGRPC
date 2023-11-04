import { Purchase } from '$/lib/domain/entities/purchase';

export type CreateUseCase = (data: CreateUseCase.Data) => Promise<Purchase>;

export namespace CreateUseCase {
  export type Data = {
    price: number;
    userId: string;
  }
}