import { CatalogItem } from '$/lib/domain/entities/catalog-item';


export type SearchUseCase = (data: SearchUseCase.Data) => Promise<CatalogItem[]>;

export namespace SearchUseCase {
  export type Data = {
    queryString: string;
  }
}