function carrinhoData(req, res, next) {
  res.locals.carrinho = false;

  if (req.session.carrinho) {
    res.locals.carrinho = true;
  }
  next();
}

module.exports = carrinhoData;
