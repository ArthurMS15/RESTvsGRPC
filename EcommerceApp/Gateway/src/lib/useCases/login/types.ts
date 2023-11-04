import { User } from '$/lib/domain/entities/user';


export type LoginUseCase = (data: LoginUseCase.Data) => Promise<User>;

export namespace LoginUseCase {
  export type Data = {
    email: string;
    password: string;
  }
}