const express = require('express');
const router = express.Router();

function checkLogin(req, res, next) {
    if (req.session.logado) {
        next();
    } else {
        res.redirect('/login');
    }
}

router.get('/', checkLogin, (req, res) => {
    res.render('home', { usuario: req.session.usuario });
});

module.exports = router;
