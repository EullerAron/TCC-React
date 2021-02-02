const express = require('express');
const app = express(); 

const jwt = require('jsonwebtoken');
const autenticacaoConfig = require('../config/autenticacao.json');

const User = require('../model/usuario');
const Cuidador_Cachorro = require('../model/cuidador_cachorro');
const Cuidador_Crianca = require('../model/cuidador_criança');
const Cuidador_Idoso = require('../model/cuidador_idoso');

app.post('/cuidador_cachorro', async function(req, resp){

    try {

        const cuidadores = Cuidador_Cachorro.find(function(error, cuidadores){
            if (error) {
                return resp.status(400).send({ error: "Erro ao buscar cuidadores de cachorro"});
            } else {
                return resp.send({ cuidadores });
            }
        });

    } catch (err) {
        return resp.status(400).send({ error: "Erro ao buscar cuidadores"});
    }
});

app.post('/cuidador_crianca', async function(req, resp){

    try {

        const cuidadores = Cuidador_Crianca.find(function(error, cuidadores){
            if (error) {
                return resp.status(400).send({ error: "Erro ao buscar cuidadores de crianca"});
            } else {
                return resp.send({ cuidadores });
            }
        });

    } catch (err) {
        return resp.status(400).send({ error: "Erro ao buscar cuidadores"});
    }
});

app.post('/cuidador_idoso', async function(req, resp){

    try {

        const cuidadores = Cuidador_Idoso.find(function(error, cuidadores){
            if (error) {
                return resp.status(400).send({ error: "Erro ao buscar cuidadores de idoso"});
            } else {
                return resp.send({ cuidadores });
            }
        });

    } catch (err) {
        return resp.status(400).send({ error: "Erro ao buscar cuidadores"});
    }
});



module.exports = app;