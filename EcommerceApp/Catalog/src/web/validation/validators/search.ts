import Joi from 'joi';
import { joiHelpers } from '../helpers';

type SearchInput = {
  body: {
    queryString: string;
  }
}

export const searchValidator = joiHelpers.makeValidator(
  Joi.object<SearchInput>({
    body: Joi.object<SearchInput["body"]>({
      queryString: Joi.string().required(),
    }),
  })
);
