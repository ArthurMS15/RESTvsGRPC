import logger from './logger';
import app from './main/app';
import vars from './vars';

app.listen(vars.port, () => logger.info(`running on ${vars.port}`))
