const EventosController = {
    index: (req,res) => {
        return res.render('telapagamento', { userLogged: req.session.userLogged })
    }
}

module.exports = EventosController;