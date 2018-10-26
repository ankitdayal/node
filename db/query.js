import logger from '../lib/logger';
import Connect from './connect';

export const runQuery = async query => {
    const connection = await Connect.getConnection();
    logger.info(`Query is ${query}`);
    const res = await connection.query(query);
    logger.info(`Query response is ${JSON.stringify(res)}`);
    return res;
};
