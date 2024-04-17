//Importando a classe
const loginModel = require('../models/loginModel')
//instanciando a classe
const login = new loginModel()
const logged = login.isLogged()

exports.getLogin = ((req, res) => {
    //exibindo a chamada da função
    res.send(`<h1>${login.isLogged()}<h1>`)
})

exports.getIsLogged = ((req, res) => {
    res.render("loginView", {logged: logged});
});
