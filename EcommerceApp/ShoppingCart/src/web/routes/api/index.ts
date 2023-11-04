import { loggerMiddleware } from '$/web/middlewares/logger';
import { Router } from 'express';
import { shoppingCartController } from '$/web/controllers/shopping-cart-controller';

const apiRoutes = Router();

apiRoutes.use(loggerMiddleware);

apiRoutes.post('/cart', shoppingCartController.create);
apiRoutes.post('/cart/checkout', shoppingCartController.checkout);
apiRoutes.get('/cart/:userId', shoppingCartController.get);
apiRoutes.put('/cart/:id', shoppingCartController.update);
apiRoutes.delete('/cart/:id', shoppingCartController.delete);

export default apiRoutes;