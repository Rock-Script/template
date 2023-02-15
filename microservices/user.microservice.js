const APITool = require('../tools/api.tool');
const ApplicationCacheTool = require('../tools/application.cache.tool');

module.exports.createUser = async(payload) => {
    const user = await APITool.post(ApplicationCacheTool.microservices.auth_create_user, payload, 'members');
    return user;
}