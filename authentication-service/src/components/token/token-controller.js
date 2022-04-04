// eslint-disable-next-line no-unused-vars
const debug = require('debug')('auth:token-controller');
const { createToken, refreshAccessToken } = require('./token-service');

const postToken = async (req, res) => {
    const { userId, userType } = req.body;

    const token = await createToken({ userId, userType });

    res.status(201).send(token);
};

const postRefreshToken = async (req, res) => {
    const { userId, userType, refreshToken } = req.body;

    const token = await refreshAccessToken(userId, userType, refreshToken);

    res.status(201).send(token);
};

module.exports = { postToken, postRefreshToken };
