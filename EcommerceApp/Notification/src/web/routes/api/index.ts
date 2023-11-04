import { notificationController } from '$/web/controllers/notification-controller';
import { loggerMiddleware } from '$/web/middlewares/logger';
import { Router } from 'express';

const apiRoutes = Router();

apiRoutes.use(loggerMiddleware);

apiRoutes.post('/sendMail', notificationController.sendMail);

export default apiRoutes;