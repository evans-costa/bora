function findDuplicate(req, res, next) {
  if (req.session.carrinho) {
    const carrinho = req.session.carrinho;

    for (let evento of carrinho) {
      if (evento.id == req.params.id) {
        return res.redirect("/");
      }
    }
  }
  next();
}

module.exports = {
  findDuplicate,
};
