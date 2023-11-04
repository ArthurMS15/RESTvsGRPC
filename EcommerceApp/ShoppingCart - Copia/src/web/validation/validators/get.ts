import Joi from 'joi';
import { joiHelpers } from '../helpers';

type GetInput = {
  params: {
    userId: string;
  }
}

export const getValidator = joiHelpers.makeValidator(
  Joi.object<GetInput>({
    params: Joi.object<GetInput["params"]>({
      userId: Joi.string().required(),
    }),
  })
);
