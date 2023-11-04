import Joi from 'joi';
import { joiHelpers } from '../helpers';

type SendMailInput = {
  body: {
    status: string;
    purchaseId: string;
    userId: string;
  };
};

export const sendMailValidator = joiHelpers.makeValidator(
  Joi.object<SendMailInput>({
    body: Joi.object<SendMailInput["body"]>({
      status: Joi.string().required(),
      purchaseId: Joi.string().required(),
      userId: Joi.string().required(),
    }),
  })
);
