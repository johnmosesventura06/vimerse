// eslint-disable-next-line no-unused-vars
const debug = require('debug')('auth:token-service');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const NotAuthorizedError = require('../../errors/not-authorized-error');
const UserTypes = require('../../types/user-types');
const tokenDAL = require('./db/token-data-access-layer');

const ACCESS_TOKEN_EXPIRATION = 60 * 5;
const REFRESH_TOKEN_EXPIRATION = '3d';

/**
 *
 * @param {{userId: string, userType: string}} props
 * @param {string} accessTokenExpiresIn
 * @param {string} refreshTokenExpiresIn
 * @returns {{accessToken: string, refreshToken: string}}
 */
const createToken = async (
    // I decided to make this an object
    // because we won't know how many claims
    // will be added in the JWT payload
    props,
    accessTokenExpiresIn = ACCESS_TOKEN_EXPIRATION,
    refreshTokenExpiresIn = REFRESH_TOKEN_EXPIRATION
) => {
    const { userId, userType } = props || {};

    if (!userId) {
        throw new Error(`'userId' property is required`);
    }

    if (!userType) {
        throw new Error(`'userType' property is required`);
    }

    console.log("usertypes",userType )
    if (Object.values(UserTypes).indexOf(userType) < 0) {
        throw new Error(`'userType' property has an invalid value`);
    }

    const privateKey = fs.readFileSync(process.env.PRIVATE_KEY_PATH);
    const refreshPrivateKey = fs.readFileSync(
        process.env.REFRESH_PRIVATE_KEY_PATH
    );
    const payload = {
        // registered claims in the official spec
        sub: userId,
        // private/custom claims
        type: userType,
    };

    const accessToken = jwt.sign(payload, privateKey, {
        algorithm: 'RS256',
        expiresIn: accessTokenExpiresIn,
    });

    const refreshToken = jwt.sign(payload, refreshPrivateKey, {
        algorithm: 'RS256',
        expiresIn: refreshTokenExpiresIn,
    });

    const token = await tokenDAL.create({ userId, accessToken, refreshToken });

    return {
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
    };
};

/**
 *
 * @param {string} token
 * @returns {{sub: string, type: string} | null}
 */
const verifyAccessToken = (token) => {
    try {
        const publicKey = fs.readFileSync(process.env.PUBLIC_KEY_PATH);
        const payload = jwt.verify(token, publicKey);

        return payload;
    } catch (error) {
        debug(error);

        return null;
    }
};

/**
 *
 * @param {string} token
 * @returns {{sub: string, type: string} | null}
 */
const verifyRefreshToken = (token) => {
    try {
        const refreshPublicKey = fs.readFileSync(
            process.env.REFRESH_PUBLIC_KEY_PATH
        );
        const payload = jwt.verify(token, refreshPublicKey);

        return payload;
    } catch (error) {
        debug(error);

        return null;
    }
};

/**
 *
 * @param {string} userId
 * @param {string} userType
 * @param {string} refreshToken
 * @returns {{accessToken: string, refreshToken: string}}
 */
const refreshAccessToken = async (userId, userType, refreshToken) => {
    const token = await tokenDAL.findOne({ userId, refreshToken });

    if (!token) {
        throw new NotAuthorizedError('Invalid JWT token');
    }

    let payload = null;

    try {
        payload = verifyRefreshToken(refreshToken);
    } catch (error) {
        debug(error);

        throw new NotAuthorizedError('Invalid JWT token');
    }

    const { sub, type } = payload;

    if (type !== userType) {
        throw new NotAuthorizedError('Invalid JWT token');
    }

    const newToken = await createToken({
        userId: sub,
        userType: type,
    });

    // delete the old token
    await tokenDAL.deleteOne({ id: token.id });

    return newToken;
};

module.exports = {
    createToken,
    verifyAccessToken,
    verifyRefreshToken,
    refreshAccessToken,
};
