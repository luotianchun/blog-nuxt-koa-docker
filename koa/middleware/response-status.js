const STATUS_CODES = {
    CONTINUE: 100,
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    NOT_ACCEPTABLE: 406,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    REQUEST_ENTITY_TOO_LARGE: 413,
    UNSUPPORTED_MEDIA_TYPE: 415,
    UNPROCESSABLE_ENTITY: 422,
    TOO_MANY_REQUESTS: 429,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504
};

const responseStatus = (statusCode, params = {}) => {
    const { code = null, data = null, message = null } = params;

    if (statusCode < 400) {
        return {
            status: 'success',
            data: params,
            message
        };
    } else {
        return {
            status: statusCode < 500 ? 'fail' : 'error',
            code,
            data: params,
            message
        };
    }
};

module.exports.responseStatus = responseStatus