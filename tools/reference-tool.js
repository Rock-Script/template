const Mongo = require('./mongo.tool');
const DB_COLLECTIONS = require('../contants/db-collections');

module.exports.getCourse = async(course_id, institute_id) => {
    return await Mongo.findOne(DB_COLLECTIONS.COURSES, { _id: Mongo.id(course_id) });
}

module.exports.getInstitute = async(institute_id) => {
    return await Mongo.findOne(DB_COLLECTIONS.INSTITUTES, { _id: Mongo.id(institute_id) });
}