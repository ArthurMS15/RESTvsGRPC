import packageJson from '../package.json';
const { env, cwd } = process;

const vars = {
  port: Number(env.PORT ?? 3000),
  path: cwd(),
  app: {
    env: env.NODE_ENV, // default "development"
    name: packageJson.name,
    version: packageJson.version,
  },
  db: {
    limit: Number(env.DB_LIMIT ?? 50),
    postgres: env.DB_POSTGRES ?? 'postgresql://postgres:postgres@localhost:5432/postgres',
  },
  purchaseService: {
    restUrl: "http://localhost:3004/api/purchase",
    grpcUrl: "localhost:50054"
  }
};

export default vars;