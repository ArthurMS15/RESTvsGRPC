import { ServerCredentials } from '@grpc/grpc-js';
import server from './grpc/app';
import { startTransporter } from './lib/infra/nodemailer/transport';
import logger from './logger';
import vars from './vars';
import app from './web/app';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = "0";


// REST STARTUP CODE
// startTransporter()
//   .then(() => app.listen(vars.port, () => logger.info(`running on ${vars.port}`)))
//   .catch((error: Error) => logger.error(error) && process.exit(1));

// GRPC STARTUP CODE
startTransporter()
  .then(() => server.bindAsync('0.0.0.0:50055', ServerCredentials.createInsecure(), () => {
    server.start();
  }))

