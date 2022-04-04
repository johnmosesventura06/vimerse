const NotAuthorizedError = require('../errors/not-authorized-error');

const requireAuth = (req, _res, next) => {
    const xApiKeyHeader = req.headers['x-api-key'];

    if (!xApiKeyHeader) {
        throw new NotAuthorizedError('Invalid header');
    }

    if (xApiKeyHeader !== process.env.API_KEY) {
        throw new NotAuthorizedError('Invalid header');
    }

    next();
};

module.exports = requireAuth;
