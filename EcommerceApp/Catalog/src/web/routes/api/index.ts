import { loggerMiddleware } from '$/web/middlewares/logger';
import { Router } from 'express';
import { catalogController } from '$/web/controllers/catalog-controller';

const apiRoutes = Router();

apiRoutes.use(loggerMiddleware);

apiRoutes.post('/searchCatalog', catalogController.search);

export default apiRoutes;