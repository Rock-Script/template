const _ = require('lodash');
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi);

const Mongo = require('./mongo.tool');

module.exports.ObjectId = () => Joi.objectId();

module.exports.validate = (database_schema, params) => {
    try {
        const schema = Joi.object(database_schema).unknown(false).options({ allowUnknown: false });
        params = updateObjectForValidation(params);
        const validation_result = schema.validate(params, { stripUnknown: true });
        if (validation_result.error) {
            throw validation_result.error.message;
        }
        return updateObjectForDatabase(validation_result.value);
    } catch(error) {
        throw {
            status: 400,
            message: `Error in database validation ${error}`
        }
    }
}

const updateObjectForValidation = (params) => {
    _.keys(params).forEach(key => {
        if (key.endsWith("_id")) {
            params[key] = params[key].toString()
        } else if (_.isObject(params[key])) {
            updateObjectForValidation(params[key]);
        }
    })
    return params;
}

const updateObjectForDatabase = (params) => {
    _.keys(params).forEach(key => {
        if (key.endsWith("_id")) {
            params[key] = Mongo.id(params[key]);
        } else if (_.isObject(params[key])) {
            updateObjectForDatabase(params[key]);
        }
    })
    return params;
}