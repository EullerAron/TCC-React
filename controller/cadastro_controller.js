const express = require('express');
const app = express(); 
const mongoose = require("mongoose"); 
mongoose.Promise = global.Promise;
const User = require('../model/usuario');

app.post('/cliente', async function(req, resp){
    const { email } = req.body;

    try {
        if (await User.findOne({ email })){
            return resp.status(400).send({ error: "Usuario ja cadastrado"});
        }

        console.log(req.body.nome);

        const user = await User.create(req.body);

        user.senha = undefined;

        return resp.send({ user });
    } catch (err) {
        return resp.status(400).send({ error: "Erro ao registar usuario"});
    }
});


module.exports = app;