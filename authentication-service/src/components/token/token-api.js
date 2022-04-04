// eslint-disable-next-line no-unused-vars
const debug = require('debug')('auth:token-api');
const express = require('express');
const { body } = require('express-validator');
const requireAuth = require('../../middlewares/require-auth');
const validateRequest = require('../../middlewares/validate-request');
const { postToken, postRefreshToken } = require('./token-controller');

const router = express.Router();

router.post(
    '/',
    requireAuth,
    [
        body('userId')
            .trim()
            .escape()
            .notEmpty()
            .withMessage(`Request body 'userId' is not defined`),
        body('userType')
            .trim()
            .escape()
            .notEmpty()
            .withMessage(`Request body 'userType' is not defined`),
    ],
    validateRequest,
    postToken
);

router.post(
    '/refresh',
    [
        body('userId')
            .trim()
            .escape()
            .notEmpty()
            .withMessage(`Request body 'userId' is not defined`),
        body('userType')
            .trim()
            .escape()
            .notEmpty()
            .withMessage(`Request body 'userType' is not defined`),
        body('refreshToken')
            .notEmpty()
            .withMessage(`Request body 'refreshToken' is not defined`),
    ],
    validateRequest,
    postRefreshToken
);

module.exports = router;
