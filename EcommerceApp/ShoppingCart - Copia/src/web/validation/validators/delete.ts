import Joi from 'joi';
import { joiHelpers } from '../helpers';

type DeleteInput = {
  params: {
    id: string;
  }
}

export const deleteValidator = joiHelpers.makeValidator(
  Joi.object<DeleteInput>({
    params: Joi.object<DeleteInput["params"]>({
      id: Joi.string().required(),
    }),
  })
);
