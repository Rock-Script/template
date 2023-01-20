
module.exports = async(handler, req, res, next) => {
    try {
        req.api_response = await handler(req, res, next);
        next();
    } catch (error) {
        res.status(error.status || 500).json({
            status: error.status || 500,
            message: error.message || 'Server Error'
        })
    }
}