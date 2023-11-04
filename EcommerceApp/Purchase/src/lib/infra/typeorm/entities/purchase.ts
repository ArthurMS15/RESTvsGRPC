import { Purchase as DomainPurchase } from '$/lib/domain/entities/purchase';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: "varchar"})
  status: DomainPurchase["status"];

  @Column({ type: 'timestamptz', default: () => "CURRENT_TIMESTAMP"})
  updatedAt: Date;

  @Column({ type: 'timestamptz', default: () => "CURRENT_TIMESTAMP"})
  createdAt: Date;

  @Column({ type: "uuid"})
  userId: string;

  @Column({ type: "decimal" })
  price: number;
}
