module.exports = function(req, res, next) {
    if (req.session.userId) {
        return next()
    }
    let err = new Error('Not Authticated')
    err.status = 401
    return next(err)
}