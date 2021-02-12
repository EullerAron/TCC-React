const express = require('express');
const app = express(); 

app.use('/uploads', express.static('uploads'));
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './uploads/');
  },
  filename: function(req, file, cb){
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

const jwt = require('jsonwebtoken');
const autenticacaoConfig = require('../config/autenticacao.json');

const User = require('../model/usuario');
const Cuidador_Cachorro = require('../model/cuidador_cachorro');
const Cuidador_Crianca = require('../model/cuidador_criança');
const Cuidador_Idoso = require('../model/cuidador_idoso');
const Servico = require('../model/servico');

app.post('/cliente', async function(req, resp){
    const { email } = req.body;

    try {
        if (await User.findOne({ email })){
            return resp.status(400).send({ error: "Usuario ja cadastrado"});
        }

        const user = await User.create(req.body);

        user.senha = undefined;

        const token = jwt.sign({ id: user.id }, autenticacaoConfig.secret, {
            expiresIn: 86400,
        });

        return resp.json({ user: user, id: user.id , token: token });
    } catch (err) {
        return resp.status(400).send({ error: "Erro ao registar usuario"});
    }
});

app.post('/imagem', upload.single('imagem'), function(req, resp){
    resp.json({ imagem: req.file.destination + req.file.originalname });
});

app.post('/cuidador/cachorro', async function(req, resp){

    try {
        const cuidador_cachorro = await Cuidador_Cachorro.create(req.body);

        return resp.send({ cuidador_cachorro });
        
    } catch (err) {
        return resp.status(400).send({ error: "Erro ao registar cuidador de cachorro"});
    }
});

app.post('/cuidador/crianca', async function(req, resp){

    try {
        const cuidador_crianca = await Cuidador_Crianca.create(req.body);

        return resp.send({ cuidador_crianca });
        
    } catch (err) {
        return resp.status(400).send({ error: "Erro ao registar cuidador de criança"});
    }
});

app.post('/cuidador/idoso', async function(req, resp){

    try {
        const cuidador_idoso = await Cuidador_Idoso.create(req.body);

        return resp.send({ cuidador_idoso });
        
    } catch (err) {
        return resp.status(400).send({ error: "Erro ao registar cuidador de idoso"});
    }
});

app.post('/servico', async function(req, resp){

    try {
        const servico = await Servico.create(req.body);

        return resp.send({ servico });
        
    } catch (err) {
        return resp.status(400).send({ error: "Erro ao registar servico"});
    }
});


module.exports = app;