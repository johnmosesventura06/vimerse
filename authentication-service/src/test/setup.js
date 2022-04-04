const path = require('path');
const mongoose = require('mongoose');

beforeAll(async () => {
    process.env.API_KEY =
        'c11a790701432b4bf6a9ac9c797cc614846d4c7bc533cc11faa4032cd5b14684';
    process.env.PRIVATE_KEY_PATH = path.resolve(
        __dirname,
        './keys/private.key'
    );
    process.env.PUBLIC_KEY_PATH = path.resolve(__dirname, './keys/public.key');
    process.env.REFRESH_PRIVATE_KEY_PATH = path.resolve(
        __dirname,
        './keys/refresh-private.key'
    );
    process.env.REFRESH_PUBLIC_KEY_PATH = path.resolve(
        __dirname,
        './keys/refresh-public.key'
    );

    await mongoose.connect('mongodb://localhost:27017/auth_test');
});

beforeEach(async () => {
    jest.clearAllMocks();

    const collections = await mongoose.connection.db.collections();

    // eslint-disable-next-line no-restricted-syntax
    for (const collection of collections) {
        // eslint-disable-next-line no-await-in-loop
        await collection.deleteMany();
    }
});

afterAll(async () => {
    const collections = await mongoose.connection.db.collections();

    // eslint-disable-next-line no-restricted-syntax
    for (const collection of collections) {
        // eslint-disable-next-line no-await-in-loop
        await collection.deleteMany();
    }

    await mongoose.connection.close();
});
