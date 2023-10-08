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

routes.post('/cart', async (_req, res) => {
  const {id_usuario,id_item,quantidade} = _req.body;
  //interagir com bd lógica
  res.json({message: 'Item adicionado ao carrinho', id_usuario, id_item, quantidade});
});

export default routes;