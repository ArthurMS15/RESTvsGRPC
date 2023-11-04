import { typeormDataSource } from './lib/infra/typeorm/data-source';
import { ServerCredentials } from "@grpc/grpc-js"
import logger from './logger';
import app from './web/app';
import vars from './vars';
import server from './grpc/app';


// REST STARTUP CODE
//typeormDataSource.initialize()
//  .then(() => app.listen(vars.port, () => logger.info(`running on ${vars.port}`)))
//  .catch((error: Error) => logger.error(error) && process.exit(1));

// GRPC STARTUP CODE
typeormDataSource.initialize()
 .then(() => server.bindAsync('0.0.0.0:50052', ServerCredentials.createInsecure(), () => {
 server.start();
}))

  