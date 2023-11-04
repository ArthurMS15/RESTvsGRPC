import { Wishlist } from '$/lib/domain/entities/wishlist';

export type CreateUseCase = (data: CreateUseCase.Data) => Promise<Wishlist>;

export namespace CreateUseCase {
  export type Data = {
    itemId: string;
    userId: string;
  }
}