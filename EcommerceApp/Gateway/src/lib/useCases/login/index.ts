import { LoginUseCase } from './types'
import { Like } from "typeorm"

import { entityManager } from '$/lib/infra/typeorm/data-source'
import { User } from '$/lib/infra/typeorm/entities/user'

export const loginUseCase: LoginUseCase = async (data) => {
  const user = await entityManager.findOneByOrFail(User, { email: data.email, password: data.password })

  return user;
};