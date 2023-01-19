function entrarEmContato(req,res) {
    res.render('fale-conosco', { userLogged: req.session.userLogged })
}


module.exports = {
    entrarEmContato,
}