import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Wishlist {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamptz', default: () => "CURRENT_TIMESTAMP"})
  updatedAt: Date;

  @Column({ type: 'timestamptz', default: () => "CURRENT_TIMESTAMP"})
  createdAt: Date;

  @Column({ type: "uuid"})
  userId: string;

  @Column({  type: "uuid"})
  itemId: string;
}
