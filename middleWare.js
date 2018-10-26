import { statsdLogger } from './lib/statsd';
import { setApiResponse } from './app/helpers/utils';
import logger from './lib/logger';

export function responseTracker(ctx, next) {
    logger.info('Started Tracking Response Times');
    const start = Date.now();
    return next()
        .then(() => {
            const delta = Math.ceil(Date.now() - start);
            const methodName = ctx.url.substr(1);
            // statsd logging
            if (ctx.response.status === 200) {
                statsdLogger(`heimdall.${methodName}.success`);
            }
            else {
                statsdLogger(`heimdall.${methodName}.failure`);
            }
            logger.info('Response time is', `${delta}ms`);
            ctx.set('X-Response-Time', `${delta}ms`);
        });
}

export async function roleCheck(ctx, next) {
    try {
        // Authorization check from DB
        return next();
    }
    catch (e) {
        logger.info('Role check authorization failed', e);
        setApiResponse(e.status || 500, e.message, ctx);
    }
    return null;
}
