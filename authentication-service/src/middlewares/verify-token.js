const jwt = require('jsonwebtoken');
const fs = require('fs');
const NotAuthorizedError = require('../errors/not-authorized-error');

const verifyToken = (req, _res, next) => {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
        throw new NotAuthorizedError('Missing authorization header');
    }

    const authorizationHeaderSplit = authorizationHeader.split(' ');
    const authenticationScheme = authorizationHeaderSplit[0];
    const token = authorizationHeaderSplit[1];

    if (authenticationScheme !== 'Bearer') {
        throw new NotAuthorizedError('Invalid Authorization header');
    }

    const publicKey = fs.readFileSync(process.env.PUBLIC_KEY_PATH);

    try {
        jwt.verify(token, publicKey);
    } catch (error) {
        throw new NotAuthorizedError('Invalid JWT');
    }

    next();
};

module.exports = verifyToken;
