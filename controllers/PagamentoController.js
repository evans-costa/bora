const EventosController = {
  index: (req, res) => {
    return res.render('telapagamento', { userLogged: req.session.userLogged, carrinho: req.session.carrinho });
  },
};

module.exports = EventosController;
