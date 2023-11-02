import { createUseCase } from '$/lib/useCases/create'
import { updateUseCase } from '$/lib/useCases/update'
import { deleteUseCase } from '$/lib/useCases/delete'
import { getUseCase } from '$/lib/useCases/get'
import { ShoppingCartService } from './types';

export const shoppingCartService: ShoppingCartService = {
  getShoppingCartsByUser: async (call, callback) => {
    const userId = call.request.userId
    const result = await getUseCase(userId);
    
    callback(null, {
      shoppingCarts: result
    });
  },

  createShoppingCart: async (call, callback) => {
    const result = await createUseCase(call.request);

    callback(null, result);
  },

  deleteShoppingCart: async (call, callback) => {
    await deleteUseCase({ id: call.request.id });

    callback(null, {});
  },

  updateShoppingCart: async (call, callback) => {
    await updateUseCase({ id: call.request.id, params: { amount: call.request.amount }});

    callback(null, {});
  },
}
