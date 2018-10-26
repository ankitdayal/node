import { responseSuccess, responseFailure } from '../../app/helpers/responseFormats';

export const setApiResponse = (status, data, ctx) => {
    ctx.status = status;
    ctx.body = (status === 200 ? responseSuccess : responseFailure)(data);
};
