const MongoDB = require('mongodb')
const { MongoClient } = require('mongodb');
const Logger = require('./log.tool');

class Mongo {

    #url;
    #client;
    #database;

    constructor() {}

    async connect(url, database) {
        try {
            this.#url = url;
            this.#database = database;
            Logger.info(`Mongo => connecting to ${this.#url}`);
            this.#client = new MongoClient(this.#url);
            await this.#client.connect();
            Logger.info(`connected to ${this.#url}...`);
        } catch (err) {
            Logger.info(err);
        }
        return true;
    }

    id(_id) {
        return _id ? MongoDB.ObjectId(_id) : MongoDB.ObjectId();
    }

    getDatabase() {
        return this.#client.db(this.#database);
    }

    async aggregate(collection, pipeline) {
        const data = await this.getDatabase().collection(collection).aggregate(pipeline).toArray();
        return data;
    }

    async insertOne(collection, payload) {
        const data = await this.getDatabase().collection(collection).insertOne(payload);
        return data;
    }

    async findOne(collection, payload, projection) {
        const data = await this.getDatabase().collection(collection).findOne(payload, projection);
        return data;
    }

    async updateOne(collection, filter, payload) {
        const data = await this.getDatabase().collection(collection).updateOne(filter, payload);
        return data;
    }
}

module.exports = new Mongo();