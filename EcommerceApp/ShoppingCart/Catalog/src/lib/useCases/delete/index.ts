import { DeleteUseCase } from './types'

import { entityManager } from '$/lib/infra/typeorm/data-source'
import { ShoppingCart } from '$/lib/infra/typeorm/entities/shopping-cart'

export const deleteUseCase: DeleteUseCase = (data) => {
  return entityManager.delete(ShoppingCart, { id: data.id });
}