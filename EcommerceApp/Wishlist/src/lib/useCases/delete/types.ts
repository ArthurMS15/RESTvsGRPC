import { DeleteResult } from 'typeorm';

export type DeleteUseCase = (data: DeleteUseCase.Data) => Promise<DeleteResult>;

export namespace DeleteUseCase {
  export type Data = {
    id: string;
  }
}