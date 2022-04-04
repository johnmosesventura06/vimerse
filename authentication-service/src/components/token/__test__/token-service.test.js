const fs = require('fs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const {
    createToken,
    verifyAccessToken,
    verifyRefreshToken,
    refreshAccessToken,
} = require('../token-service');
const UserTypes = require('../../../types/user-types');
const tokenDAL = require('../db/token-data-access-layer');

const wait = (time) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });

describe('test successful cases in token service', () => {
    it('creates and saves a token', async () => {
        const { accessToken, refreshToken } = await createToken({
            userId: new mongoose.Types.ObjectId().toHexString(),
            userType: UserTypes.Player,
        });

        expect(accessToken).toBeTruthy();
        expect(refreshToken).toBeTruthy();
    });

    it('verifies a token is valid', async () => {
        const { accessToken, refreshToken } = await createToken({
            userId: new mongoose.Types.ObjectId().toHexString(),
            userType: UserTypes.Player,
        });

        const accessTokenPayload = verifyAccessToken(accessToken);
        const refreshTokenPayload = verifyRefreshToken(refreshToken);

        expect(accessTokenPayload).toBeTruthy();
        expect(refreshTokenPayload).toBeTruthy();
    });

    it('verifies payload', async () => {
        const userId = new mongoose.Types.ObjectId().toHexString();
        const userType = UserTypes.Player;

        const { accessToken } = await createToken({
            userId,
            userType,
        });

        const payload = verifyAccessToken(accessToken);

        expect(payload).toBeTruthy();
        expect(payload.sub).toEqual(userId);
        expect(payload.type).toEqual(userType);
    });

    it('creates a new access token using a refresh token', async () => {
        const userId = new mongoose.Types.ObjectId().toHexString();
        const userType = UserTypes.Player;

        // creates an expired access token by
        // setting the expiresIn paramter to zero
        const { accessToken, refreshToken } = await createToken(
            { userId, userType },
            0
        );

        expect(verifyAccessToken(accessToken)).toBeFalsy();
        expect(verifyRefreshToken(refreshToken)).toBeTruthy();

        // add a delay to prevent duplicate creation of JWT
        // JWTs are signed using a timestamp in seconds
        // so need to delay a second before creating a new one
        await wait(1000);

        const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
            await refreshAccessToken(userId, userType, refreshToken);

        // make sure that the old token is deleted
        await expect(tokenDAL.count()).resolves.toBe(1);

        expect(newAccessToken).toBeTruthy();
        expect(newRefreshToken).toBeTruthy();
        expect(verifyAccessToken(newAccessToken)).toBeTruthy();
        expect(verifyRefreshToken(newRefreshToken)).toBeTruthy();
    });
});

describe('test failing cases in token service', () => {
    it('returns an error when payload values are invalid', async () => {
        await expect(
            createToken({ userId: null, userType: null })
        ).rejects.toThrow();

        const userId = new mongoose.Types.ObjectId().toHexString();

        await expect(createToken({ userId, userType: null })).rejects.toThrow();

        await expect(
            createToken({ userId, userType: 'invalidusertype' })
        ).rejects.toThrow();
    });

    it('fails to save duplicate tokens', async () => {
        const userId = new mongoose.Types.ObjectId().toHexString();

        const { accessToken, refreshToken } = await createToken({
            userId,
            userType: UserTypes.Player,
        });

        await expect(
            createToken({ userId, accessToken, refreshToken })
        ).rejects.toThrow();
    });

    it('fails to verify expired token', async () => {
        const { accessToken, refreshToken } = await createToken(
            {
                userId: new mongoose.Types.ObjectId().toHexString(),
                userType: UserTypes.Player,
            },
            0,
            0
        );

        expect(verifyAccessToken(accessToken)).toBeFalsy();
        expect(verifyRefreshToken(refreshToken)).toBeFalsy();
    });

    it('fails to verify a tampered/invalid token', async () => {
        const { accessToken, refreshToken } = await createToken({
            userId: new mongoose.Types.ObjectId().toHexString(),
            userType: UserTypes.Player,
        });

        const tamperedAccessToken = accessToken.replace(/.$/, '__abcde');
        const tamperedRefreshToken = refreshToken.replace(/.$/, 'xyzjdf');

        expect(verifyAccessToken(tamperedAccessToken)).toBeFalsy();
        expect(verifyRefreshToken(tamperedRefreshToken)).toBeFalsy();
        expect(verifyAccessToken('someinvalidaccesstoken')).toBeFalsy();
        expect(verifyRefreshToken('someinvalidrefreshtoken')).toBeFalsy();
    });

    it('fails to create new token if provided refresh token is not found in the database', async () => {
        await expect(
            refreshAccessToken(
                new mongoose.Types.ObjectId().toHexString(),
                'somerefreshtoken'
            )
        ).rejects.toThrow();
    });

    it('fails to create new token if provided user type does not match the user type in the refresh token payload', async () => {
        const userId = new mongoose.Types.ObjectId().toHexString();

        const { refreshToken } = await createToken({
            userId,
            userType: UserTypes.Player,
        });

        await expect(
            refreshAccessToken(userId, UserTypes.Agent, refreshToken)
        ).rejects.toThrow();
    });
});

describe('test JWT attacks and prevention', () => {
    it('fails using RSA public key as HMAC secret', async () => {
        const publicKey = fs.readFileSync(process.env.PUBLIC_KEY_PATH);
        const payload = { sub: 'somerandomuserid' };

        const forgedToken = jwt.sign(payload, publicKey, {
            algorithm: 'HS256',
        });

        expect(forgedToken).toBeDefined();
        expect(verifyAccessToken(forgedToken)).toBeFalsy();
    });

    it('fails on signature stripping attack', () => {
        const publicKey = fs.readFileSync(process.env.PUBLIC_KEY_PATH);
        const payload = { sub: 'somerandomuserid' };

        const forgedToken = jwt.sign(payload, publicKey, {
            algorithm: 'none',
        });

        expect(forgedToken).toBeDefined();
        expect(verifyAccessToken(forgedToken)).toBeFalsy();
    });
});
