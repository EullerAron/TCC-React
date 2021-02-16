const express = require('express');
const app = express(); 

const Servico = require('../model/servico');

app.post('/aceitar', function (req, resp) {
    var id = req.body.id;

    Servico.updateOne({ idUsuarioCuidador: id }, { $set: { aceite: true } }, function (err, result) {
        if (err == null) {
            console.log("Funcionou e atualizou o banco!")
            console.log(result);
            resp.send(result)
        } else {
            console.log("Erro no update " + err)
        }
    });
});


module.exports = app;