function logged(req, res, next) {
  const userLogged = req.session.userLogged;
  if (req.session.userLogged) {
    return res.redirect(`/users/perfil/${userLogged.id}`);
  }
  next();
}

function notLogged(req, res, next) {
  if (!req.session.userLogged) {
    return res.redirect('/login');
  }
  next();
}

module.exports = {
  logged,
  notLogged
};