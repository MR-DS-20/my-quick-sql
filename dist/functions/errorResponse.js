"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = void 0;
/**
 * reacts with predefined or provided messsage, or complete error object depending on env.ENVIRONMENT === 'prod' || 'dev'
 * @param res the Express response object
 * @param err the err object to be returned if env.ENVIRONMENT ==='dev
 * @param errMessage message to be returned if env.ENVIRONMENT !==='dev'
 * @param status:number defualts to 500 if not provided. Http error code staus to be set in res.status()
 */
function errorResponse(res, err, errMessage, status) {
    if (!status) {
        let status = 500;
    }
    if (process.env.ENVIRONMENT === 'dev') {
        res.status(status).send(err);
    }
    else {
        let defaultErrMessage = 'Database error';
        if (errMessage) {
            defaultErrMessage = errMessage;
        }
        res.status(status).json({ error: defaultErrMessage });
    }
}
exports.errorResponse = errorResponse;
