export type SendEmailUseCase = (data: SendEmailUseCase.Data) => Promise<void>;

export namespace SendEmailUseCase {
  export type Data = {
    status: string;
    purchaseId: string;
    userId: string;
  };
}