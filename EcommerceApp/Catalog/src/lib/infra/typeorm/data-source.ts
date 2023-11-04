import vars from '$/vars';
import { DataSource } from 'typeorm';
import { CatalogItem } from './entities/catalog-item';

export const typeormDataSource = new DataSource({
  type: 'postgres',
  url: vars.db.postgres,
  synchronize: false,
  logging: vars.app.env !== 'production',
  entities: [ CatalogItem ],
  migrations: ["db/migrations/*.ts"],
});

export const entityManager = typeormDataSource.manager;