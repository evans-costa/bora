const { body, validationResult } = require("express-validator");

function validateUser(req, res, next) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render("login", {
            errors: errors.array(),
            data: {
                email: req.body.email,
                password: req.body.password,
            },
        });
    }

    next();

}

const inputValidation = [
    body("email").isEmail().withMessage("Digite seu e-mail"),
    body("password").notEmpty().withMessage("Digite sua senha")
        .isLength({ min: 5 }).withMessage("A senha precisa ter pelo menos 5 caracteres"),
]

module.exports = {
    validateUser,
    inputValidation,
}