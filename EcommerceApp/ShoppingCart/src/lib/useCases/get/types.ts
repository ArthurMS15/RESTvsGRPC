import { ShoppingCart } from '$/lib/domain/entities/shopping-cart';
import { DeleteResult } from 'typeorm';

export type GetUseCase = (data: GetUseCase.Data) => Promise<ShoppingCart[]>;

export namespace GetUseCase {
  export type Data = {
    userId: string;
  }
}