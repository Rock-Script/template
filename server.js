const http = require('http');
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const Logger = require('./tools/log.tool');

class Server {

    #port;
    #server;
    #app;

    constructor(port, routes) {
        if (port) this.#port = port;
        const app = express();
        app.use(cors());
        app.use(compression());
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        this.#app = app;
        if (routes) app.use(routes);
        this.#server = http.createServer(app);
    }

    getServer() {
        return this.#server;
    }

    setPort(port) {
        this.#port = port;
    }

    addRoutes(routes) {
        this.#app.use(routes);
    }

    start(callback) {
        this.#server.listen(this.#port, () => {
            Logger.info(`Server started on port: ${this.#port}`);
            callback();
        })
    }

    initializeMongo(url, database, callback) {
        const Mongo = require('./tools/mongo.tool');
        Mongo.connect(url, database);
        const ApplicationCache = require('./tools/application.cache.tool');
        ApplicationCache.init();
        callback();
    }

    initializeMalier(api_key, sender_email, sender_name, callback) {
        const Mail = require('./tools/mail.tool.js');
        Mail.setup(api_key, sender_email, sender_name);
        callback();
    }

    initializeConfigs(file_path) {
        const Config = require('./tools/config.tool');
        return Config.config(file_path);
    }

    initializeLogger(log_configs) {
        const Logger = require('./tools/log.tool');
        log_configs.forEach(log_config => {
            Logger.addTransport(log_config.level, log_config.type, log_config.file_path);
        });
    }

    logFactory(level, type, file_path) {
        return { level, type, file_path }
    }
}

module.exports = Server