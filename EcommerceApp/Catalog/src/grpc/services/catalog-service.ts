import { searchUseCase } from '$/lib/useCases/search'
import { CatalogService } from './types';

export const catalogService: CatalogService = {
  searchCatalog: async (call, callback) => {
    const request = call.request
    const result = await searchUseCase(request);
    
    callback(null, {
      catalogItems: result
    });
  },
}
