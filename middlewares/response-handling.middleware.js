const HTTP_RESPONSES = require('../contants/http-responses');

module.exports = async(req, res, next) => {
    try {
        if (req.api_response) {
            res.status(req.api_response.status).json({
                ...req.api_response,
                timestamp: req.timestamp
            });
        }
    } catch (error) {
        res.status(500).json(HTTP_RESPONSES.INTERNAL_SERVER_ERROR)
    }
}