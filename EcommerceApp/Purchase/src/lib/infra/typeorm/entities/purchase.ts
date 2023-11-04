import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  status: "processing" | "completed";

  @Column({ type: 'timestamptz', default: () => "CURRENT_TIMESTAMP"})
  updatedAt: Date;

  @Column({ type: 'timestamptz', default: () => "CURRENT_TIMESTAMP"})
  createdAt: Date;

  @Column({ type: "uuid"})
  userId: string;

  @Column({ type: "decimal" })
  price: number;
}
