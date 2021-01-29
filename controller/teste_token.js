const express = require('express');
const app = express(); 
const autenticacaoMiddleware = require('../middlewares/autenticacao');

// app.use(autenticacaoMiddleware);

app.post('/', autenticacaoMiddleware, function(req, resp){
    console.log("OLAAAAAAAAAAA");
    resp.send({ ok: true, id: req.userId});
});


module.exports = app;