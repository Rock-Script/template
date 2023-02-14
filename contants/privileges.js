const Mongo = require('../tools/mongo.tool');

module.exports = [
    {
        _id: Mongo.id("63e5c9dd7399000000000001"),
        name: "Create member",
        privilege: "member/c"
    },
    {
        _id: Mongo.id("63e5c9dd7399000000000002"),
        name: "Update member",
        privilege: "member/u"
    },
    {
        _id: Mongo.id("63e5c9dd7399000000000003"),
        name: "Read member",
        privilege: "member/r"
    },
    {
        _id: Mongo.id("63e5c9dd7399000000000004"),
        name: "Delete member",
        privilege: "member/d"
    },

    {
        _id: Mongo.id("63e5c9dd7399000000000011"),
        name: "Create exam",
        privilege: "exam/c"
    },
    {
        _id: Mongo.id("63e5c9dd7399000000000012"),
        name: "Update exam",
        privilege: "exam/u"
    },
    {
        _id: Mongo.id("63e5c9dd7399000000000013"),
        name: "Read exam",
        privilege: "exam/r"
    },
    {
        _id: Mongo.id("63e5c9dd7399000000000014"),
        name: "Delete exam",
        privilege: "exam/d"
    },


    {
        _id: Mongo.id("63e5c9dd7399000000000021"),
        name: "Create course",
        privilege: "course/c"
    },
    {
        _id: Mongo.id("63e5c9dd7399000000000022"),
        name: "Update course",
        privilege: "course/u"
    },
    {
        _id: Mongo.id("63e5c9dd7399000000000023"),
        name: "Read course",
        privilege: "course/r"
    },
    {
        _id: Mongo.id("63e5c9dd7399000000000024"),
        name: "Delete course",
        privilege: "course/d"
    },


    {
        _id: Mongo.id("63e5c9dd7399000000000031"),
        name: "Create exam log",
        privilege: "exam_log/c"
    },
    {
        _id: Mongo.id("63e5c9dd7399000000000032"),
        name: "Update exam log",
        privilege: "exam_log/u"
    },
    {
        _id: Mongo.id("63e5c9dd7399000000000033"),
        name: "Read exam log",
        privilege: "exam_log/r"
    },
    {
        _id: Mongo.id("63e5c9dd7399000000000034"),
        name: "Delete exam log",
        privilege: "exam_log/d"
    }
]