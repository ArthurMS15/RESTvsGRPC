import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CatalogItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'timestamptz', default: () => "CURRENT_TIMESTAMP"})
  updatedAt: Date;

  @Column({ type: 'timestamptz', default: () => "CURRENT_TIMESTAMP"})
  createdAt: Date;

  @Column({ type: "decimal" })
  price: number;
}
