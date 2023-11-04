import { CreateUseCase } from './types';

import { entityManager } from '$/lib/infra/typeorm/data-source';
import { Wishlist } from '$/lib/infra/typeorm/entities/wishlist';

export const createUseCase: CreateUseCase = (data) => {
  return entityManager.save(Wishlist, data);
}