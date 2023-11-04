import { Wishlist } from '$/lib/domain/entities/wishlist';
import { DeleteResult } from 'typeorm';

export type GetUseCase = (data: GetUseCase.Data) => Promise<Wishlist[]>;

export namespace GetUseCase {
  export type Data = {
    userId: string;
  }
}