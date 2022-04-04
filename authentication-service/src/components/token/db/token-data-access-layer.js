// eslint-disable-next-line no-unused-vars
const debug = require('debug')('auth:token-data-access-layer');
const Token = require('../token');
const MongooseModel = require('./mongoose-token-model');

/**
 *
 * @param {*} model
 * @returns {Token | null}
 */
const createTokenFromModel = (model) => {
    if (!model) {
        return null;
    }

    const token = new Token();
    token.id = model.id;
    token.userId = model.userId;
    token.id = model.id;
    token.accessToken = model.accessToken;
    token.refreshToken = model.refreshToken;
    token.createdAt = model.createdAt;

    return token;
};

/**
 *
 * @param {{
 * userId: string,
 * accessToken: string,
 * refreshToken: string
 * }} creationAttributes
 * @returns {Promise<Token>}
 */
const create = async (creationAttributes) => {
    const tokenModel = await MongooseModel.create(creationAttributes);

    return createTokenFromModel(tokenModel);
};

/**
 *
 * @param {string | number} id
 * @returns {Promise<Token | null>}
 */
const findById = async (id) => {
    const tokenModel = await MongooseModel.findById(id);

    return createTokenFromModel(tokenModel);
};

/**
 *
 * @param {{
 * userId: string,
 * accessToken: string,
 * refreshToken: string
 * }} filter
 * @returns {Promise<Token | null>}
 */
const findOne = async (filter) => {
    const tokenModel = await MongooseModel.findOne(filter);

    return createTokenFromModel(tokenModel);
};

/**
 *
 * @param {{
 * userId: string,
 * accessToken: string,
 * refreshToken: string
 * }} filter
 * @returns {Promise<Token[]>}
 */
const findAll = async (filter) => {
    const tokenModels = await MongooseModel.find(filter);

    const tokens = tokenModels.map((model) => createTokenFromModel(model));

    return tokens;
};

/**
 *
 * @param {{
 * id: string | number,
 * userId: string,
 * accessToken: string,
 * refreshToken: string
 * }} filter
 */
const deleteOne = async (filter) => {
    await MongooseModel.findOneAndDelete(filter);
};

/**
 *
 * @param {{
 * id: string | number,
 * userId: string,
 * accessToken: string,
 * refreshToken: string
 * }} filter
 * @returns {number}
 */
const count = async (filter) => {
    const aCount = await MongooseModel.count(filter);

    return aCount;
};

module.exports = { create, findById, findOne, findAll, deleteOne, count };
