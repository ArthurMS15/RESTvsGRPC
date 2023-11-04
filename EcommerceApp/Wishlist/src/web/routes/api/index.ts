import { loggerMiddleware } from '$/web/middlewares/logger';
import { Router } from 'express';
import { wishlistController } from '$/web/controllers/wishlist-controller';

const apiRoutes = Router();

apiRoutes.use(loggerMiddleware);

apiRoutes.post('/wishlist', wishlistController.create);
apiRoutes.get('/wishlist/:userId', wishlistController.get);
apiRoutes.delete('/wishlist/:id', wishlistController.delete);

export default apiRoutes;