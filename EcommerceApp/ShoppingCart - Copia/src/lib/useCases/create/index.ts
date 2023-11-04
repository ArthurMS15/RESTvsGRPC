import { CreateUseCase } from './types'

import { entityManager } from '$/lib/infra/typeorm/data-source'
import { ShoppingCart } from '$/lib/infra/typeorm/entities/shopping-cart'

export const createUseCase: CreateUseCase = (data) => {
  return entityManager.save(ShoppingCart, data);
}