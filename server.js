import helmet from 'koa-helmet';
import koaBody from 'koa-body';
import server from 'koa-static-server';
import { responseTracker, roleCheck } from './middleWare';
import route from './routes';

const userAgent = require('koa-useragent'); // Require to fetch the user-agent of the request.


const applyMiddleware = app => {
    app.use(responseTracker);

    // Security middleware starts.
    app.use(helmet()); // Enables security headers.

    app.use(userAgent);

    // Impliment security middlewares
    app.use(koaBody({
        formLimit : '10mb',
        jsonLimit : '100mb',
        textLimit : '100mb',
    }));

    // User Authorization
    app.use(roleCheck);

    app.use(route.routes());
    app.use(server({ rootDir: 'public/swagger-doc/dist', rootPath: '/docs' }));
};

export default applyMiddleware;
