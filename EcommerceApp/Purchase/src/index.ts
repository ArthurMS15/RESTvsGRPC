import { ServerCredentials } from '@grpc/grpc-js';
import { typeormDataSource } from './lib/infra/typeorm/data-source';
import logger from './logger';
import vars from './vars';
import app from './web/app';
import server from './grpc/app';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = "0";


// REST STARTUP CODE
// typeormDataSource.initialize()
//   .then(() => app.listen(vars.port, () => logger.info(`running on ${vars.port}`)))
//   .catch((error: Error) => logger.error(error) && process.exit(1));

// GRPC STARTUP CODE
typeormDataSource.initialize()
  .then(() => server.bindAsync('0.0.0.0:50054', ServerCredentials.createInsecure(), () => {
    server.start();
  }))

