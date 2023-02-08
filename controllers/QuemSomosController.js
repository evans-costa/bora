function quemSomosView(req, res) {
  return res.render('quemSomos', { userLogged: req.session.userLogged, funcionarioLogged: req.session.funcionarioLogged, carrinho: req.session.carrinho });
}

module.exports = {
  quemSomosView,
};
