
module.exports = async(req, res, next) => {
    try {
        req.timestamp = new Date();
        next();
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Server Error'
        })
    }
}