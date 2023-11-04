import packageJson from '../package.json';
const { env, cwd } = process;

const vars = {
  port: Number(env.PORT ?? 3005),
  path: cwd(),
  app: {
    env: env.NODE_ENV, // default "development"
    name: packageJson.name,
    version: packageJson.version,
  },
  mail: {
    user: 'qjhfx4u7gus6ocq5@ethereal.email',
    pass: '4shYh34tJdvS2zgehy'
  }
};

export default vars;