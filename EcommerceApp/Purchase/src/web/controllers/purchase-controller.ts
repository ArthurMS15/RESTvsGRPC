import { PurchaseController } from './types'
import { createValidator } from '../validation/validators/create'
import { createUseCase } from '$/lib/useCases/create'
import { sendNotification } from '$/lib/infra/notificationClient/restNotification';

export const purchaseController: PurchaseController = {
  create: async (req, res) => {
    const data = await createValidator(req);
    const result = await createUseCase(data.body, sendNotification);
    res.json(result);
  },
}