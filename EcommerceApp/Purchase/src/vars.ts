import packageJson from '../package.json';
const { env, cwd } = process;

const vars = {
  port: Number(env.PORT ?? 3004),
  path: cwd(),
  app: {
    env: env.NODE_ENV, // default "development"
    name: packageJson.name,
    version: packageJson.version,
  },
  db: {
    limit: Number(env.DB_LIMIT ?? 50),
    postgres: env.DB_POSTGRES ?? 'postgresql://postgres:postgres@localhost:5435/postgres',
  },
  notificationService: {
    restUrl: "http://localhost:3005/api/sendMail",
    grpcUrl: "localhost:50055"
  }
};

export default vars;