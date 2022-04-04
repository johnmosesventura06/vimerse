require('dotenv').config();

const debug = require('debug')('auth:index');
const mongoose = require('mongoose');
const app = require('./app');

const start = async () => {
    try {
        if (!process.env.API_KEY) {
            throw new Error('Environment variable API_KEY must be defined');
        }

        if (!process.env.PRIVATE_KEY_PATH) {
            throw new Error(
                'Environment variable PRIVATE_KEY_PATH must be defined'
            );
        }

        if (!process.env.PUBLIC_KEY_PATH) {
            throw new Error(
                'Environment variable PUBLIC_KEY_PATH must be defined'
            );
        }

        if (!process.env.REFRESH_PRIVATE_KEY_PATH) {
            throw new Error(
                'Environment variable REFRESH_PRIVATE_KEY_PATH must be defined'
            );
        }

        if (!process.env.REFRESH_PUBLIC_KEY_PATH) {
            throw new Error(
                'Environment variable REFRESH_PUBLIC_KEY_PATH must be defined'
            );
        }

        // this is here for running this app locally not in a Docker container
        if (process.env.NODE_ENV !== 'production' && !process.env.MONGO_URI) {
            process.env.MONGO_URI = 'mongodb://localhost:27017/auth';
        }

        if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI must be defined');
        }

        await mongoose.connect(process.env.MONGO_URI);

        debug('Connected to MongoDB');

        const port = process.env.PORT || 3001;

        app.listen(port, () => {
            debug(`Listening on port ${port}`);
        });
    } catch (error) {
        debug(error);
    }
};

start();
