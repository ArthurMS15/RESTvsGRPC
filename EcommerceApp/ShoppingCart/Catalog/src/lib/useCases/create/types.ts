import { ShoppingCart } from '$/lib/domain/entities/shopping-cart';

export type CreateUseCase = (data: CreateUseCase.Data) => Promise<ShoppingCart>;

export namespace CreateUseCase {
  export type Data = {
    amount: number;
    itemId: string;
    userId: string;
  }
}