import log4js from 'log4js';

log4js.configure({
    appenders  : { out: { type: 'stdout' }, app: { type: 'file', filename: 'logs/node-service.log' } },
    categories : { default: { appenders: ['app', 'out'], level: 'info' } },
});

const logger = log4js.getLogger('node-service');

export default logger;
