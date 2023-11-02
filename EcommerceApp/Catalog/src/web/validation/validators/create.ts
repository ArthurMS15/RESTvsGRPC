import Joi from 'joi';
import { joiHelpers } from '../helpers';

type CreateInput = {
  body: {
    userId: string;
    itemId: string;
    amount: number;
  }
}

export const createValidator = joiHelpers.makeValidator(
  Joi.object<CreateInput>({
    body: Joi.object<CreateInput["body"]>({
      userId: Joi.string().required(),
      itemId: Joi.string().required(),
      amount: Joi.number().required(),
    }),
  })
);
