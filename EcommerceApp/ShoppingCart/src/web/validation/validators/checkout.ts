import Joi from 'joi';
import { joiHelpers } from '../helpers';

type CheckoutInput = {
  body: {
    userId: string;
  }
}

export const checkoutValidator = joiHelpers.makeValidator(
  Joi.object<CheckoutInput>({
    body: Joi.object<CheckoutInput["body"]>({
      userId: Joi.string().required(),
    }),
  })
);
