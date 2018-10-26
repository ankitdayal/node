import path from 'path';

const env = process.env.NODE_ENV || 'dev';
const configs = {
    base: {
        env,
        host : '0.0.0.0',
        port : 8921,
    },
    prod: {
        port   : process.env.APP_PORT || 8921,
        logger : {
            name    : 'node-service',
            streams : [{
                type   : 'rotating-file',
                path   : path.join(__dirname, '../../.node-service.log'),
                period : '1d',
                count  : 7,
                level  : 'info',
            }],
        },
    },
    development: {
        logger: {
            name    : 'node-service--dev',
            streams : [{
                type   : 'stream',
                stream : process.stdout,
                level  : 'debug',
            }],
        },
    },
    test: {
        port   : 6577,
        logger : {
            name    : 'node-service-test',
            streams : [],
        },
    },
};
const config = Object.assign(configs.base, configs[env]);

export default config;
