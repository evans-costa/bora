function findDuplicate(req, res, next) {
  if (req.session.carrinho) {
    const carrinho = req.session.carrinho;

    for (let evento of carrinho) {
      if (evento.id == req.params.id) {
        return;
      }
    }
  }
  next();
}

module.exports = {
  findDuplicate,
};
