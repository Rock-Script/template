const Mongo = require('./mongo.tool');
const DB_COLLECTIONS = require('../contants/db-collections');

module.exports.getCourse = async(course_id, institute_id) => {
    return await Mongo.findOne(DB_COLLECTIONS.COURSES, { _id: Mongo.id(course_id) });
}

module.exports.getInstitute = async(institute_id) => {
    return await Mongo.findOne(DB_COLLECTIONS.INSTITUTES, { _id: Mongo.id(institute_id) });
}

module.exports.getExam = async(exam_id, institute_id) => {
    return await Mongo.findOne(DB_COLLECTIONS.EXAMS, { _id: Mongo.id(exam_id) });
}

module.exports.getCourses = async(course_ids, institute_id) => {
    const pipline = [];
    const match = {};
    if (course_ids) match._id = { $in: Mongo.idArray(course_ids) };
    if (institute_id) match.institute_id = Mongo.id(institute_id);
    pipline.push({ $match: match });
    return await Mongo.aggregate(DB_COLLECTIONS.COURSES, pipline);
}