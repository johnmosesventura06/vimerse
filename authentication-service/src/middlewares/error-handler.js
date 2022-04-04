// eslint-disable-next-line no-unused-vars
const debug = require('debug')('auth:error-handler-middleware');
const CustomError = require('../errors/custom-error');

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, _req, res, _next) => {
    debug(error);

    if (error instanceof CustomError) {
        return res
            .status(error.statusCode)
            .send({ errors: error.serializeErrors() });
    }

    return res.status(500).send({ errors: [{ message: error.message }] });
};

module.exports = errorHandler;
