import { GetUseCase } from './types'

import { entityManager } from '$/lib/infra/typeorm/data-source'
import { ShoppingCart } from '$/lib/infra/typeorm/entities/shopping-cart'

export const getUseCase: GetUseCase = (data) => {
  return entityManager.findBy(ShoppingCart, { userId: data.userId });
}