const ROUTE_METHODS = require('../../contants/route-methods.const');
const SystemController = require('./system.controller');

const routes = [
    {
        path: '/system/health',
        method: ROUTE_METHODS.GET,
        handler: SystemController.systemHealth
    }
]

module.exports = routes;