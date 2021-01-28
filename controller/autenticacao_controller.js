const express = require('express');
const app = express(); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const autenticacaoConfig = require('../config/autenticacao.json');

const User = require('../model/usuario');

app.post('/', async function(req, resp){
    const { email, senha } = req.body;

    const user = await User.findOne({ email }).select('+senha');

    if (!user){
        return resp.status(400).send({ error: "Usuario não cadastrado" });
    }

    if (!await bcrypt.compare(senha, user.senha)){
        return resp.status(400).send({ error: "Senha incorreta" });
    }

    user.senha = undefined;

    const token = jwt.sign({ id: user.id }, autenticacaoConfig.secret, {
        expiresIn: 86400,
    });

    resp.send({ user, token});
});


module.exports = app;