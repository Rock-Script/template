const jwt = require('jsonwebtoken');
const Config = require('./config.tool');

module.exports.sign = (data, expiry_in_minutes=60) => {
    return jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * expiry_in_minutes),
        data,
    }, Config.privateKeyPhrase);
}

module.exports.decode = (token) => {
    return jwt.verify(token, Config.privateKeyPhrase);
}