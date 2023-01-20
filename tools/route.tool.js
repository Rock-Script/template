const ExceptionHandlingMiddleware = require('../middlewares/exception-handling.middleware');
const ResponseHandlingMiddleware = require('../middlewares/response-handling.middleware');
const RequestInterceptorMiddleware = require('../middlewares/request-interceptor.middleware');
const RequestValidationMiddleware = require('../middlewares/request-validation.middleware');
const SystemRoutes = require('../components/system/system.routes');

class RouteTool {

    #router;

    constructor() {

    }

    setRouter(router) {
        this.#router = router;
        this.addRoutes(SystemRoutes);
    }

    addRoutes(routes) {
        routes.forEach(route => {
            this.#router[route.method](
                route.path,
                (req, res, next) => RequestInterceptorMiddleware(req, res, next),
                (req, res, next) => RequestValidationMiddleware(route.validation, req, res, next), 
                (req, res, next) => ExceptionHandlingMiddleware(route.handler, req, res, next),
                (req, res, next) => ResponseHandlingMiddleware(req, res, next)
            )
        });
    }
}

module.exports = new RouteTool()