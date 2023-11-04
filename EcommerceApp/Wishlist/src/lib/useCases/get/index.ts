import { GetUseCase } from './types'

import { entityManager } from '$/lib/infra/typeorm/data-source'
import { Wishlist } from '$/lib/infra/typeorm/entities/wishlist'

export const getUseCase: GetUseCase = (data) => {
  return entityManager.findBy(Wishlist, { userId: data.userId });
}