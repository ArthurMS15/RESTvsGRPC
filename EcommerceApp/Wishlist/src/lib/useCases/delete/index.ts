import { DeleteUseCase } from './types'

import { entityManager } from '$/lib/infra/typeorm/data-source'
import { Wishlist } from '$/lib/infra/typeorm/entities/wishlist'

export const deleteUseCase: DeleteUseCase = (data) => {
  return entityManager.delete(Wishlist, { id: data.id });
}