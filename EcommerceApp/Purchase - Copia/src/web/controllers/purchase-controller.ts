import { PurchaseController } from './types'
import { createValidator } from '../validation/validators/create'
import { createUseCase } from '$/lib/useCases/create'

export const purchaseController: PurchaseController = {
  create: async (req, res) => {
    const data = await createValidator(req);
    const result = await createUseCase(data.body);
    res.json(result);
  },
}