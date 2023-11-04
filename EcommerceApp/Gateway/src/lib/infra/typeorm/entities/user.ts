import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'timestamptz', default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @Column({ type: 'timestamptz', default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

}

