// import statsD from 'statsd-client';
// import { env } from '../config/env';
//
// export const statsdEnv = env[process.env.NODE_ENV ? process.env.NODE_ENV : 'dev'];
//
// export const statsdClient = new statsD({
//     host  : statsdEnv.statsdAddress,
//     port  : statsdEnv.statsdPort,
//     debug : true,
// });
//
// export const statsdLogger = key => {
//     statsdClient.increment(key);
// };
