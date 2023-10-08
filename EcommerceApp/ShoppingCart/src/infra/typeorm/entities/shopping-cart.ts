import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ShoppingCart {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamptz' })
  timestamp: Date;

  @Column({ type: 'timestamptz' })
  created: Date;

  @Column({ name: "user_id", type: "uuid"})
  userId: string;

  @Column({ name: "item_id", type: "uuid"})
  itemId: string;

  @Column({ type: "int" })
  amount: number;
}
