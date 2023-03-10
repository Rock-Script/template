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

module.exports.getMembers = async(filter) => {
    const pipline = [];
    const match = {};
    if (filter.email) match.email = new RegExp(match.email, "i");
    if (filter._ids) match._id = { $in: Mongo.idArray(filter._ids) };
    pipline.push({ $match: match });
    return await Mongo.aggregate(DB_COLLECTIONS.MEMBERS, pipline);
}

module.exports.getUsers = async(filter) => {
    const pipline = [];
    const match = {};
    if (filter.email) match.email = new RegExp(match.email, "i");
    if (filter._ids) match._id = { $in: Mongo.idArray(filter._ids) };
    pipline.push({ $match: match });
    return await Mongo.aggregate(DB_COLLECTIONS.USERS, pipline);
}

module.exports.getUserByEmail = async(email) => {
    if (!email) return null;
    return await Mongo.findOne(DB_COLLECTIONS.EXAMS, { email: new RegExp(email.trim(), "i") });
}