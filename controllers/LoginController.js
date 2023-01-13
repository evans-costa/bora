const { User } = require('../database/models');
const  bcrypt  = require('bcrypt');

function formLogin(req,res) {
  res.cookie('testando o cookie', {maxAge: 2000})
    return res.render('login')
}

async function login(req,res) {
   let { email, password } = req.body;
   let getUserEmail = await User.findOne({
        where: {
            email: email,
        }
    }) 

    if(getUserEmail) {
        let userPassWord =  getUserEmail.senha
        let validPassword =  bcrypt.compareSync(password,userPassWord)
        if(validPassword) {
          delete getUserEmail.senha
          req.session.userLogged = getUserEmail
          return res.redirect('/login/profile')
        }

        return res.render("login", {
            errors: {
              password: {
                msg: 'Senha incorreta'
              }
            }
          })
    }

    return res.render("login",{
        errors: {
          email: {
            msg: 'Este email não foi encontrado'
          }
        },
      })
    
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