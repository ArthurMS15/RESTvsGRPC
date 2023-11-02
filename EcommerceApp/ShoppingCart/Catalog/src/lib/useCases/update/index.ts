import { UpdateUseCase } from './types'

import { entityManager } from '$/lib/infra/typeorm/data-source'
import { ShoppingCart } from '$/lib/infra/typeorm/entities/shopping-cart'

export const updateUseCase: UpdateUseCase = (data) => {
  return entityManager.update(ShoppingCart, { id: data.id }, data.params);
}