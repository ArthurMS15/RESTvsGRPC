import { CreateUseCase } from './types';

import { entityManager } from '$/lib/infra/typeorm/data-source';
import { Purchase } from '$/lib/infra/typeorm/entities/purchase';

export const createUseCase: CreateUseCase = (data) => {
  return entityManager.save(Purchase, {...data, status: 'processing'});
}