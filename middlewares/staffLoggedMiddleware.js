function logged(req, res, next) {
  if (req.session.funcionarioLogged) {
    return res.redirect('/');
  }
  next();
}

function notLogged(req, res, next) {
  if (!req.session.funcionarioLogged) {
    return res.redirect('/login');
  }
  next();
}

module.exports = {
  logged,
  notLogged
};