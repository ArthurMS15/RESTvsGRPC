import { ShoppingCartController } from './types'
import { createValidator } from '../validation/validators/create'
import { createUseCase } from '$/lib/useCases/create'
import { updateUseCase } from '$/lib/useCases/update'
import { deleteUseCase } from '$/lib/useCases/delete'
import { getUseCase } from '$/lib/useCases/get'
import { deleteValidator } from '../validation/validators/delete';
import { updateValidator } from '../validation/validators/update'
import { getValidator } from '../validation/validators/get'
import { checkoutValidator } from '../validation/validators/checkout'
import { checkoutUseCase } from '$/lib/useCases/checkout'
import { createPurchase } from '$/lib/infra/purchaseClient/restPurchase'

export const shoppingCartController: ShoppingCartController = {
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
  update: async (req, res) => {
    const data = await updateValidator(req);
    const result = await updateUseCase({ id: data.params.id, params: data.body });
    res.json(result);
  },
  checkout: async (req, res) => {
    const data = await checkoutValidator(req);
    const result = await checkoutUseCase(data.body, createPurchase);
    res.json(result);
  },
}