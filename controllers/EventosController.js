const eventoModel = require("../models/evento");

const EventosController = {
    telaEventos: (req,res) => {
        return res.render('eventos')
    },

    telaCadastroEvento: (req,res) => {
        return res.render('cadastrarEvento')
    },

    criarEvento: (req, res) => {
        
        const {picture, title, description} = req.body
        
        let fileLocation = ""
        
        if (req.file) {
            fileLocation = `/uploads/${req.file.filename}`
        } else {
            fileLocation = picture;
        }

        eventoModel.criarEvento(fileLocation, title, description)
        return res.redirect('/')
    },

    telaEditarEvento: (req, res) => {
        const { id } = req.params;
        const evento = eventoModel.getById(id)
        return res.render('atualizarEvento', { evento })
    },

    atualizarPorId: (req, res) => {
        const {id} = req.params;
        const {picture, title, description} = req.body

        let fileLocation = ""

        if (req.file) {
            fileLocation = `/uploads/${req.file.filename}`
        } else {
            fileLocation = picture;
        }

        eventoModel.atualizarEvento(id, fileLocation, title, description)
        return res.redirect('/')
    },

    excluirPorId: (req, res) => {
        const {id} = req.params;
        eventoModel.excluirEvento(id)
        return res.redirect('/')
    }
}

module.exports = EventosController;