const Joi = require("joi")
const { ObjectId } = require("../tools/db-validation.tool")

module.exports.PARENT_SCHEMA = {
    _id: ObjectId(),
    name: Joi.string().required()
};

module.exports.COURSE_PARENT_SCHEMA = Joi.object({
    ...this.PARENT_SCHEMA
})

module.exports.INSTITUTE_SCHEMA = Joi.object({
    ...this.PARENT_SCHEMA
})

module.exports.COURSE_SCHEMA = Joi.object({
    ...this.PARENT_SCHEMA
})

module.exports.ROLE_SCHEMA = Joi.object({
    ...this.PARENT_SCHEMA,
    previleges: Joi.array().items(ObjectId()).required()
})