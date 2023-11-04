import logger from './logger';
import app from './web/app';
import vars from './vars';
import { typeormDataSource } from './lib/infra/typeorm/data-source';


// REST STARTUP CODE
typeormDataSource.initialize()
  .then(() => app.listen(vars.port, () => logger.info(`running on ${vars.port}`)))
  .catch((error: Error) => logger.error(error) && process.exit(1));


