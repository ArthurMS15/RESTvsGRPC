import { loggerMiddleware } from '$/web/middlewares/logger';
import { Router } from 'express';
import { purchaseController } from '$/web/controllers/purchase-controller';

const apiRoutes = Router();

apiRoutes.use(loggerMiddleware);

apiRoutes.post('/purchase', purchaseController.create);

export default apiRoutes;