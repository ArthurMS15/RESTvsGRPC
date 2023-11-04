import vars from '$/vars';
import { DataSource } from 'typeorm';
import { Purchase } from './entities/purchase';

export const typeormDataSource = new DataSource({
  type: 'postgres',
  url: vars.db.postgres,
  synchronize: false,
  logging: vars.app.env !== 'production',
  entities: [ Purchase ],
  migrations: ["db/migrations/*.ts"],
});

export const entityManager = typeormDataSource.manager;