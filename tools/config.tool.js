const _ = require('lodash');
const dotenv = require('dotenv');
const StringTool = require('./string.tool');

class Config {

    #env_file;
    MAP = {};

    constructor() {
        
    }

    setEnvFile(env_file) {
        this.#env_file = env_file;
    }

    config(env_file) {
        if (env_file) this.setEnvFile(env_file);
        dotenv.config({path: this.#env_file});

        _.keys(process.env).forEach(key => {
            // Logger.info(key, StringTool.snakeToCamel(key));
            if (key.indexOf(".") > -1) {
                const keys = key.split(".");
                let curr = this;
                let kk;
                let i;
                for (i=0; i<keys.length-1; i++) {
                    kk = StringTool.snakeToCamel(keys[i]);
                    if (!curr[kk]) curr[kk] = {};
                    curr = curr[kk];
                }
                curr[StringTool.snakeToCamel(keys[i])] = process.env[key];
            } else {
                this[StringTool.snakeToCamel(key)] = process.env[key];
            }
        })
        return this;
    }

}

module.exports = new Config();

