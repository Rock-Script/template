const Mongo = require('../tools/mongo.tool');
const Logger = require('../tools/Log.tool');
const DB_COLLECTIONS = require('../contants/db-collections');

const getMicroservices = async () => {
    const microservices = await Mongo.aggregate(DB_COLLECTIONS.MICROSERVICES, []);
    const map = {};
    microservices.forEach(ms => {
        map[ms.name] = ms.url;
    });
    return map;
};

const getEmailTemplates = async () => {
    const pipeline = [];
    const project = {
        _id: 1,
        name: 1
    }
    pipeline.push({$project: project});
    const email_templates = await Mongo.aggregate(DB_COLLECTIONS.EMAIL_TEMPLATES, pipeline);
    const map = {};
    email_templates.forEach(et => {
        map[et.name] = et._id;
    });
    return map;
};

class ApplicationCache {

    microservices;
    email_templates;

    constructor() {}

    async init() {
        this.microservices = await getMicroservices();
        this.email_templates = await getEmailTemplates();
        Logger.info('Initialized application cache...')
    }

    
}


module.exports = new ApplicationCache();