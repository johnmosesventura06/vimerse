const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const tokenSchema = new Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        accessToken: {
            type: String,
            required: true,
            unique: true,
        },
        refreshToken: {
            type: String,
            required: true,
            unique: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        toObject: {
            transform(_doc, pRet) {
                const ret = pRet;
                // eslint-disable-next-line no-underscore-dangle
                ret.id = ret._id;
                // eslint-disable-next-line no-underscore-dangle
                delete ret._id;
            },
        },
        versionKey: 'version',
        optimisticConcurrency: true,
    }
);

const Token = model('Token', tokenSchema);

module.exports = Token;
