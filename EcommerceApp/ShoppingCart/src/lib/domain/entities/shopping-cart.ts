export type ShoppingCart = {
  id: string;
  userId: string;
  itemId: string;
  amount: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}