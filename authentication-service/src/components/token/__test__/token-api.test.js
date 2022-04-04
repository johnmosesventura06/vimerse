const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../../app');
const UserTypes = require('../../../types/user-types');
const { createToken } = require('../token-service');

const wait = (time) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });

describe('POST /auth/token', () => {
    it('returns a valid token', async () => {
        const response = await request(app)
            .post('/auth/token')
            .set('x-api-key', process.env.API_KEY)
            .send({
                userId: new mongoose.Types.ObjectId().toHexString(),
                userType: UserTypes.Player,
            })
            .expect(201);

        expect(response.body.accessToken).toBeTruthy();
        expect(response.body.refreshToken).toBeTruthy();
    });

    it('returns an error if x-api-key header is missing', async () => {
        await request(app)
            .post('/auth/token')
            .send({
                userId: new mongoose.Types.ObjectId().toHexString(),
                userType: UserTypes.Player,
            })
            .expect(401);
    });

    it('returns an error if x-api-key provided is invalid', async () => {
        await request(app)
            .post('/auth/token')
            .set('x-api-key', 'invalidapikey')
            .send({
                userId: new mongoose.Types.ObjectId().toHexString(),
                userType: UserTypes.Player,
            })
            .expect(401);
    });

    it('returns an error if an invalid userId is proviced', async () => {
        let response = await request(app)
            .post('/auth/token')
            .set('x-api-key', process.env.API_KEY)
            .send({
                userId: '',
                userType: UserTypes.Player,
            })
            .expect(400);

        expect(response.body.errors).toBeTruthy();
        expect(response.body.errors.length).toBe(1);
        expect(response.body.errors[0].field).toBe('userId');

        response = await request(app)
            .post('/auth/token')
            .set('x-api-key', process.env.API_KEY)
            .send({
                userType: UserTypes.Player,
            })
            .expect(400);

        expect(response.body.errors).toBeTruthy();
        expect(response.body.errors.length).toBe(1);
        expect(response.body.errors[0].field).toBe('userId');
    });

    it('returns an error if an invalid userType is provided', async () => {
        // userType is not empty but is invalid
        // error code 500 because the value is
        // not a valid user type
        let response = await request(app)
            .post('/auth/token')
            .set('x-api-key', process.env.API_KEY)
            .send({
                userId: new mongoose.Types.ObjectId().toHexString(),
                userType: 'invalidusertype',
            })
            .expect(500);

        expect(response.body.errors).toBeTruthy();
        expect(response.body.errors.length).toBe(1);

        response = await request(app)
            .post('/auth/token')
            .set('x-api-key', process.env.API_KEY)
            .send({
                userId: new mongoose.Types.ObjectId().toHexString(),
                userType: '',
            })
            .expect(400);

        expect(response.body.errors).toBeTruthy();
        expect(response.body.errors.length).toBe(1);
        expect(response.body.errors[0].field).toBe('userType');

        response = await request(app)
            .post('/auth/token')
            .set('x-api-key', process.env.API_KEY)
            .send({
                userId: new mongoose.Types.ObjectId().toHexString(),
            })
            .expect(400);

        expect(response.body.errors).toBeTruthy();
        expect(response.body.errors.length).toBe(1);
        expect(response.body.errors[0].field).toBe('userType');
    });
});

describe('POST /auth/token/refresh', () => {
    it('returns a new valid token providing a valid refresh token', async () => {
        const userId = new mongoose.Types.ObjectId().toHexString();
        const userType = UserTypes.Player;

        const { refreshToken } = await createToken({
            userId,
            userType,
        });

        await wait(1000);

        const response = await request(app)
            .post('/auth/token/refresh')
            .send({
                userId,
                userType,
                refreshToken,
            })
            .expect(201);

        expect(response.body.accessToken).toBeTruthy();
        expect(response.body.refreshToken).toBeTruthy();
    });

    it('returns an error if invalid userId is provided', async () => {
        const userType = UserTypes.Player;

        const { refreshToken } = await createToken({
            userId: new mongoose.Types.ObjectId().toHexString(),
            userType,
        });

        await wait(1000);

        let response = await request(app)
            .post('/auth/token/refresh')
            .send({
                userId: new mongoose.Types.ObjectId().toHexString(), // different userId
                userType,
                refreshToken,
            })
            .expect(401);

        expect(response.body.errors).toBeTruthy();
        expect(response.body.errors.length).toBe(1);

        response = await request(app)
            .post('/auth/token/refresh')
            .send({
                userId: '',
                userType,
                refreshToken,
            })
            .expect(400);

        expect(response.body.errors).toBeTruthy();
        expect(response.body.errors.length).toBe(1);
        expect(response.body.errors[0].field).toBe('userId');

        response = await request(app)
            .post('/auth/token/refresh')
            .set('x-api-key', process.env.API_KEY)
            .send({
                userType,
                refreshToken,
            })
            .expect(400);

        expect(response.body.errors).toBeTruthy();
        expect(response.body.errors.length).toBe(1);
        expect(response.body.errors[0].field).toBe('userId');
    });

    it('returns an error if invalid refreshToken is provided', async () => {
        const userId = new mongoose.Types.ObjectId().toHexString();
        const userType = UserTypes.Player;

        let response = await request(app)
            .post('/auth/token/refresh')
            .send({
                userId,
                userType,
                refreshToken: '',
            })
            .expect(400);

        expect(response.body.errors).toBeTruthy();
        expect(response.body.errors.length).toBe(1);
        expect(response.body.errors[0].field).toBe('refreshToken');

        response = await request(app)
            .post('/auth/token/refresh')
            .set('x-api-key', process.env.API_KEY)
            .send({
                userId,
                userType,
            })
            .expect(400);

        expect(response.body.errors).toBeTruthy();
        expect(response.body.errors.length).toBe(1);
        expect(response.body.errors[0].field).toBe('refreshToken');
    });
});
