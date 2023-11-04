import vars from '$/vars';
import { DataSource } from 'typeorm';
import { Wishlist } from './entities/wishlist';

export const typeormDataSource = new DataSource({
  type: 'postgres',
  url: vars.db.postgres,
  synchronize: false,
  logging: vars.app.env !== 'production',
  entities: [ Wishlist ],
  migrations: ["db/migrations/*.ts"],
});

export const entityManager = typeormDataSource.manager;