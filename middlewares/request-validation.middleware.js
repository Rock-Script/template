const Joi = require('joi');
const HTTP_RESPONSES = require('../contants/http-responses');

module.exports = async(validation, req, res, next) => {
    try {
        if (validation) {
            if (validation?.params) req.params = validate(validation.params, req.params);
            if (validation?.body) req.body = validate(validation.body, req.body);
            if (validation?.query) req.query = validate(validation.query, req.query);
        }
        next();
    } catch (error) {
        res.status(400).json({
            ...HTTP_RESPONSES.BAD_REQUEST,
            error
        })
    }
}

const validate = (validation_schema, params) => {
    const schema = Joi.object(validation_schema).unknown(true).options({ allowUnknown: false });
    const validation_result = schema.validate(params);
    if (validation_result.error) {
        throw validation_result.error.message;
    }
    return validation_result.value;
}