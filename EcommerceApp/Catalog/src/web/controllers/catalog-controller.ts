import { searchUseCase } from '$/lib/useCases/search';
import { searchValidator } from '../validation/validators/search';
import { CatalogController } from './types';


export const catalogController: CatalogController = {
  search: async (req, res) => {
    const data = await searchValidator(req);
    const result = await searchUseCase(data.body);
    res.json(result);
  },
}