import { createUseCase } from '$/lib/useCases/create'
import { deleteUseCase } from '$/lib/useCases/delete'
import { getUseCase } from '$/lib/useCases/get'
import { WishlistService } from './types';

export const wishlistService: WishlistService = {
  getWishlistItemsByUser: async (call, callback) => {
    const userId = call.request.userId
    const result = await getUseCase(userId);
    
    callback(null, {
      wishlistItems: result
    });
  },

  createWishlistItem: async (call, callback) => {
    const result = await createUseCase(call.request);

    callback(null, result);
  },

  deleteWishlistItem: async (call, callback) => {
    await deleteUseCase({ id: call.request.id });

    callback(null, {});
  },
}
