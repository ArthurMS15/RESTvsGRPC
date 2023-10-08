import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ShoppingCart {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamptz' })
  timestamp: Date;

  @Column({ type: 'timestamptz' })
  created: Date;

  @Column({ name: "user_id"})
  userId: string;

  @Column({ name: "item_id"})
  itemId: string;

  @Column({ type: "int" })
  amount: number;
}
