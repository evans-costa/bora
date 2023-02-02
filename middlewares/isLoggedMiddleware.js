function logged(req, res, next) {
  if (req.session.userLogged) {
    return res.redirect('/users/perfil')
  }
  next()
}

function notLogged(req, res, next) {
  if (!req.session.userLogged) {
    return res.redirect('/login')
  }
  next()
}

module.exports = {
  logged,
  notLogged
}