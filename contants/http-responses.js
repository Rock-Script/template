module.exports = {
    OK: {
        status: 200,
        message: 'Request is successful',
    },
    CREATED: {
        status: 200,
        message: 'Entity created successfully',
    },
    NO_CONTENT: {
        status: 204,
        message: 'No data present for request'
    },
    BAD_REQUEST: {
        status: 400,
        message: 'Bad request'
    },
    UNAUTHORIZED: (mesage) => {
        return { status: 401, message: mesage || 'You are not authorised to make this request' }
    },
    PAYMENT_REQUIRED: {
        status: 402,
        message: 'Payment required'
    },
    FORBIDDEN: {
        status: 403,
        message: 'You are forbidden to make this request'
    },
    NOT_FOUND: (entity, entity_id) => {
        return { status: 404, message: `${entity} with ${entity_id} not found` };
    },
    METHOD_NOT_ALLOWED: {
        status: 403,
        message: 'Method not allowed'
    },
    REQUEST_TIMEOUT: {
        status: 408,
        message: 'Request timeout'
    },
    CONFLICT: {
        status: 409,
        message: 'Conflicts on data'
    },
    INTERNAL_SERVER_ERROR: () => {
        return {
            status: 500,
            message: 'Internal server error'
        }
    }
};