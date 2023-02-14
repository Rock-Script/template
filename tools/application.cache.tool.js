const Mongo = require('../tools/mongo.tool');
const DB_COLLECTIONS = require('../contants/db-collections');

const getMicroservices() {
    const microservices = await Mongo.aggregate(DB_COLLECTIONS.MICROSERVICES, []);
    const map = {};
    microservices.forEach(ms => {
        map[ms.name] = ms.url;
    });
    return map;
};

class ApplicationCache {

    microservices;

    constructor() {}

    async init() {
        this.microservices = await getMicroservices();
    }

    
}


module.exports = new ApplicationCache();