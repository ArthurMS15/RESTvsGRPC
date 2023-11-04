import { createUseCase } from '$/lib/useCases/create';
import { deleteUseCase } from '$/lib/useCases/delete';
import { getUseCase } from '$/lib/useCases/get';
import { createValidator } from '../validation/validators/create';
import { deleteValidator } from '../validation/validators/delete';
import { getValidator } from '../validation/validators/get';
import { WishlistController } from './types';

export const wishlistController: WishlistController = {
  get: async (req, res) => {
    const data = await getValidator(req);
    const result = await getUseCase(data.params);
    res.json(result); 
  },
  create: async (req, res) => {
    const data = await createValidator(req);
    const result = await createUseCase(data.body);
    res.json(result);
  },
  delete: async (req, res) => {
    const data = await deleteValidator(req);
    const result = await deleteUseCase(data.params);
    res.json(result);
  },
}