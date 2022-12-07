function loggedMiddleware(req,res,next) {
    res.locals.isLogged = false;
    if(req.session.userLogged) {
        res.locals.isLogged = true
    }
    next()
}

module.exports = loggedMiddleware