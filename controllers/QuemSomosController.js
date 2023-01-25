function quemSomosView(req, res) {
  return res.render("quemSomos", { userLogged: req.session.userLogged });
}

module.exports = {
  quemSomosView,
};
