const express = require('express');
require('express-async-errors');
const cookieSession = require('cookie-session');
const logger = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');

const tokenRouter = require('./components/token/token-api');
const errorHandler = require('./middlewares/error-handler');
const NotFoundError = require('./errors/not-found-error');

const app = express();
app.use(cors());
app.use(helmet());
app.use(compression());
app.set('trust proxy', true);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    cookieSession({
        name: 'SESS',
        signed: false,
        sameSite: true,
        secure: process.env.NODE_ENV !== 'test',
    })
);

if (process.env.NODE_ENV !== 'test') {
    app.use(
        logger(
            ':remote-addr :method :status :url [:res[content-length] :response-time ms :total-time ms] [:date[clf]]'
        )
    );
}

app.use('/auth/token', tokenRouter);

app.all('*', async () => {
    throw new NotFoundError('Not found');
});

app.use(errorHandler);

module.exports = app;
