import { SearchUseCase } from './types'
import { Like } from "typeorm"

import { entityManager } from '$/lib/infra/typeorm/data-source'
import { CatalogItem } from '$/lib/infra/typeorm/entities/catalog-item'

export const searchUseCase: SearchUseCase = (data) => {
  return entityManager.findBy(CatalogItem, { name: Like(`%${data.queryString}%`) })
};