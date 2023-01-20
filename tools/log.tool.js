const winston = require('winston');
const { combine, timestamp, printf } = winston.format;
const LOG_TRANSPORT = require('../contants/log-transports.const');
const LOG_LEVELS = require('../contants/log-levels.const');

const log_format = printf(({ level, message, timestamp }) => {
  return `${timestamp} | ${level}: ${message}`;
});

class Logger {

    logger;
    label;

    constructor() {
        this.logger = winston.createLogger({
            levels: LOG_LEVELS,
            format: combine(
                timestamp(),
                log_format
            )
          });
    }

    addTransport(level, transports, file_path) {
        let transport = null;
        if (transports === LOG_TRANSPORT.FILE) transport = new winston.transports.File({ filename: `${file_path}`, level: level});
        if (transports === LOG_TRANSPORT.CONSOLE) transport = new winston.transports.Console({ format: log_format, level: level});
        if (transport) this.logger.add(transport);
    }

    info(m) {
        this.logger.info(`${m}`);
    }

    error(m) {
        this.logger.error(`${m}`);
    }

    debug(m) {
        this.logger.debug(`${m}`);
    }
}


module.exports = new Logger();