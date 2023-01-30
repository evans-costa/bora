function quemSomosView(req, res) {
  return res.render('quemSomos', { userLogged: req.session.userLogged, carrinho: req.session.carrinho });
}

module.exports = {
  quemSomosView,
};
