
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.encrypt = async (value) => {
    const salt = await bcrypt.genSalt(saltRounds);
    return bcrypt.hash(value, salt);
}

module.exports.check = async (plain_text, encrypted_text) => {
    return bcrypt.compare(plain_text, encrypted_text);
}