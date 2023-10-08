import { loggerMiddleware } from '$/main/middlewares/logger';
import { Router } from 'express';
import { ShoppingCart } from '$/infra/typeorm/entities';

const apiRoutes = Router();

apiRoutes.use(loggerMiddleware);

apiRoutes.post('/cart', cartController.create);
apiRoutes.get('/cart/:user_id', cartController.get);
apiRoutes.put('/cart/:user_id/:item_id', cartController.update);
apiRoutes.delete('/cart/:user_id/:item_id', cartController.delete);

export default apiRoutes;