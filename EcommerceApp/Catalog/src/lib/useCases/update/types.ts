import { ShoppingCart } from '$/lib/domain/entities/shopping-cart';
import { UpdateResult } from 'typeorm';

export type UpdateUseCase = (data: UpdateUseCase.Data) => Promise<UpdateResult>;

export namespace UpdateUseCase {
  export type Data = {
    id: string;
    params: {
      amount: number;
    }
  }
}