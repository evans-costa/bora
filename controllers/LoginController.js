const database = require('../database/models');
const jwt = require("jsonwebtoken");
const { jwtKey } = require("../config/secrets.js");

function formLogin(req,res) {
  return res.render('login')
}

async function login(req,res) {
  const { email } = req.body
  const listaEventos = await database.Evento.findAll()

  if (email === 'admin@bora.com.br') {
    const token = jwt.sign(
      { email: email }, 
      jwtKey,
      { expiresIn: '1d' }
    )
    res.cookie("token", token)
    return res.render('index', { eventos: listaEventos })
  }

  return res.render('index', { eventos: listaEventos })
};

function viewsUserProfile(req,res) {
  return res.render('userProfile', {
    userLogged: req.session.userLogged
  });
}


module.exports = {
    formLogin,
    login,
    viewsUserProfile,
}