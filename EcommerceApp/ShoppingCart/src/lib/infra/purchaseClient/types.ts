export type CreatePurchase = (data: CreatePurchase.Data) => Promise<void>;

export namespace CreatePurchase {
  export type Data = {
    price: number,
    userId: string
  }
}

