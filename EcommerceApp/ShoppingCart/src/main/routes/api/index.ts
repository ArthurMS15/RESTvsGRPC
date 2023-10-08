import { loggerMiddleware } from '$/main/middlewares/logger';
import { Router } from 'express';

const apiRoutes = Router();

apiRoutes.use(loggerMiddleware);

export default apiRoutes;