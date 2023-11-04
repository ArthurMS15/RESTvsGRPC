import { CheckoutUseCase } from './types'

import { entityManager } from '$/lib/infra/typeorm/data-source'
import { ShoppingCart } from '$/lib/infra/typeorm/entities/shopping-cart'
import { CreatePurchase } from '$/lib/infra/purchaseClient/types';

export const checkoutUseCase: CheckoutUseCase = async (data, createPurchase) => {
  const items = await entityManager.findBy(ShoppingCart, { userId: data.userId });

  const summedValue = items.reduce((acc, item) => acc + item.price, 0);

  const createPurchaseData: CreatePurchase.Data = { price: summedValue, userId: data.userId };

  await createPurchase(createPurchaseData);

  await entityManager.delete(ShoppingCart, { userId: data.userId });
}