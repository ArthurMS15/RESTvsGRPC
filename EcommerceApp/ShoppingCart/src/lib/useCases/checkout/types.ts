import { ShoppingCart } from '$/lib/domain/entities/shopping-cart';
import { CreatePurchase } from '$/lib/infra/purchaseClient/types';

export type CheckoutUseCase = (data: CheckoutUseCase.Data, createPurchase: CreatePurchase) => Promise<void>;

export namespace CheckoutUseCase {
  export type Data = {
    userId: string;
  }
}