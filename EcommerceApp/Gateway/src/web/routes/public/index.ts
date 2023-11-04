import { loggerMiddleware } from '$/web/middlewares/logger';
import { Router } from 'express';
import vars from '$/vars';
import { loginUseCase } from '$/lib/useCases/login';
import jsonWebToken from 'jsonwebtoken';

const publicRoutes = Router();

publicRoutes.use(loggerMiddleware);

publicRoutes.post('/login', async (req, res) => {
  try {
    const user = await loginUseCase(req.body);

    const token = jsonWebToken.sign(
      { user: JSON.stringify(user) },
      vars.privateKey,
      { expiresIn: "60m" }
    );

    return res.status(200).json({ data: { user: user, token: token } })
  } catch {
    res.sendStatus(401);
  }
})

export default publicRoutes;