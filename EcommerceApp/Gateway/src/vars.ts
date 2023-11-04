import packageJson from '../package.json';
const { env, cwd } = process;

const vars = {
  port: Number(env.PORT ?? 3006),
  path: cwd(),
  app: {
    env: env.NODE_ENV, // default "development"
    name: packageJson.name,
    version: packageJson.version,
  },
  db: {
    limit: Number(env.DB_LIMIT ?? 50),
    postgres: env.DB_POSTGRES ?? 'postgresql://postgres:postgres@localhost:5436/postgres',
  },
  privateKey: "SECRETKEY",
  shoppingCartService: {
    restUrl: "http://localhost:3000",
    grpcUrl: "localhost:50051"
  },
  wishlistService: {
    restUrl: "http://localhost:3002/api/wishlist",
    grpcUrl: "localhost:50053"
  },
  catalogService: {
    restUrl: "http://localhost:3001/api/catalog",
    grpcUrl: "localhost:50052"
  }
};

export default vars;