const eventoModel = require('../models/evento')


const HomeController = {
    index: (req, res) => {
        const listaEventos = eventoModel.getAll()
        res.render('index', { listaEventos })
    }
}

module.exports = HomeController