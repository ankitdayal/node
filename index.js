import 'sqreen';
import Koa from 'koa';
import config from './config';
import applyMiddleware from './server';
import logger from './lib/logger';


const app = new Koa();

    // Start server
if (!module.parent) {
    app.listen(config.port, config.ip, () => {
        logger.info(`Node Service API server listening on ${config.host}:${config.port}, in ${config.env}`);
    });
}
    // apply middlewares
applyMiddleware(app);

