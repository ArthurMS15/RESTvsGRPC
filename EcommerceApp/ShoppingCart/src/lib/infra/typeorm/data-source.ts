import vars from '$/vars';
import { DataSource } from 'typeorm';
import { ShoppingCart } from './entities/shopping-cart';

export const typeormDataSource = new DataSource({
  type: 'postgres',
  url: vars.db.postgres,
  synchronize: false,
  logging: vars.app.env !== 'production',
  entities: [ShoppingCart],
  migrations: ["db/migrations/*.ts"],
});

export const entityManager = typeormDataSource.manager;