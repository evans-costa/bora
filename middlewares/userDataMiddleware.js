function userData(req, res, next) {
  res.locals.userIsLogged = false;

  res.locals.adminIsLogged = false;

  res.locals.funcionarioIsLogged = false;

  if (req.session.userLogged) {
    res.locals.userIsLogged = true;
  } else if (req.cookies.token) {
    res.locals.adminIsLogged = true;
  } else if (req.session.funcionarioLogged) {
    res.locals.funcionarioIsLogged = true;
  }
  next();
}

module.exports = userData;
