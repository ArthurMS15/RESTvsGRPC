import logger from './logger';
import app from './web/app';
import vars from './vars';


// REST STARTUP CODE
app.listen(vars.port, () => logger.info(`running on ${vars.port}`));

// GRPC STARTUP CODE
// typeormDataSource.initialize()
//   .then(() => server.bindAsync('0.0.0.0:50051', ServerCredentials.createInsecure(), () => {
//   server.start();
// }))

