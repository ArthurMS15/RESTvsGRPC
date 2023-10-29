import Joi from 'joi';
import { joiHelpers } from '../helpers';

type UpdateInput = {
  body: {
    amount: number;
  },
  params: {
    id: string;
  }
}

export const updateValidator = joiHelpers.makeValidator(
  Joi.object<UpdateInput>({
    params: Joi.object<UpdateInput["params"]>({
      id: Joi.string().required(),
    }),
    body: Joi.object<UpdateInput["body"]>({
      amount: Joi.number().required(),
    }),
  })
);
