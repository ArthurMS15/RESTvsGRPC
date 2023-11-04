import { createUseCase } from '$/lib/useCases/create';
import { PurchaseService } from './types';

export const purchaseService: PurchaseService = {
  createPurchase: async (call, callback) => {
    const result = await createUseCase(call.request);

    callback(null, result);
  },
}
