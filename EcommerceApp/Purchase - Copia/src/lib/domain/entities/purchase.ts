export type Purchase = {
  id: string;
  userId: string;
  status: "processing" | "completed"
  price: number;
  createdAt: Date;
  updatedAt: Date;
}