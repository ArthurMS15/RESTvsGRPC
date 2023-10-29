import vars from '$/vars';
import { Router } from 'express';
import ms from 'ms';
import apiRoutes from './api';

const routes = Router();

routes.use('/api', apiRoutes);

routes.use('/health', async (_req, res) => {
  res.json({
    name: vars.app.name,
    version: vars.app.version,
    env: vars.app.env,
  });
});

export default routes;