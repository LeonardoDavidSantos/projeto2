const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    const { usuario, senha } = req.body;
    const user = new Usuario(usuario, senha);
    const resultado = await user.autenticar();

    if (resultado) {
        req.session.logado = true;
        req.session.usuario = usuario;
        res.redirect('/');
    } else {
        res.send('Usuário ou senha inválidos');
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});

module.exports = router;
