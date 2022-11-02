const LoginController = {
    login: (req,res) => {
        return res.render('login', { errors: [], data: {} })
    }
}

module.exports = LoginController;