import Joi from 'joi';
import { joiHelpers } from '../helpers';

type CreateInput = {
  body: {
    userId: string;
    price: number;
  }
}

export const createValidator = joiHelpers.makeValidator(
  Joi.object<CreateInput>({
    body: Joi.object<CreateInput["body"]>({
      userId: Joi.string().required(),
      price: Joi.number().required(),
    }),
  })
);
