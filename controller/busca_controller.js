const express = require('express');
const app = express(); 

const jwt = require('jsonwebtoken');
const autenticacaoConfig = require('../config/autenticacao.json');

const User = require('../model/usuario');
const Cuidador_Cachorro = require('../model/cuidador_cachorro');
const Cuidador_Crianca = require('../model/cuidador_criança');
const Cuidador_Idoso = require('../model/cuidador_idoso');
const Solicitacoes = require('../model/servico');

app.get('/cuidador_cachorro/:latitude/:longitude', function(req, resp){

    const latitudeUsuario = req.params.latitude;
    const longitudeUsuario = req.params.longitude;

    var cuidadoresEndereco = [];
    var cuidadoresPerto = [];

    try {

        const cuidadores = Cuidador_Cachorro.find(async function(error, cuidadores){
            if (error) {
                return resp.status(400).send({ error: "Erro ao buscar cuidadores de cachorro"});
            } else {
                var teste = await enderecoCuidador(cuidadores)

                for (let index = 0; index < teste.length; index++) {
                    var user = teste[index].user;

                    var latitude = user[0].latitude;
                    var longitude = user[0].longitude;

                    var dist = CalcularDistancia(latitude, longitude, latitudeUsuario, longitudeUsuario);
                    
                    if (dist <= 5){
                        cuidadoresPerto.push({ user: user[0], cuidador: teste[index].cuidador, distancia: dist});
                    }
                }
                
                resp.send(cuidadoresPerto);

            }
        });

    } catch (err) {
        return resp.status(400).send({ error: "Erro ao buscar cuidadores"});
    }

    async function enderecoCuidador(cuidadores) {
        
        for (let index = 0; index < cuidadores.length; index++) {

            let cuidador = cuidadores[index];
            
            var user = await User.find({ _id: cuidador.idCuidador })
          
            cuidadoresEndereco.push({ user: user, cuidador: cuidador });
        }
        return cuidadoresEndereco; 
    }
    
});

app.get('/cuidador_crianca/:latitude/:longitude', function(req, resp){

    const latitudeUsuario = req.params.latitude;
    const longitudeUsuario = req.params.longitude;

    var cuidadoresEndereco = [];
    var cuidadoresPerto = [];

    try {

        const cuidadores = Cuidador_Cachorro.find(async function(error, cuidadores){
            if (error) {
                return resp.status(400).send({ error: "Erro ao buscar cuidadores de cachorro"});
            } else {
                var teste = await enderecoCuidador(cuidadores)

                for (let index = 0; index < teste.length; index++) {
                    var user = teste[index].user;

                    var latitude = user[0].latitude;
                    var longitude = user[0].longitude;

                    var dist = CalcularDistancia(latitude, longitude, latitudeUsuario, longitudeUsuario);
                    
                    if (dist <= 5){
                        cuidadoresPerto.push({ user: user[0], cuidador: teste[index].cuidador, distancia: dist});
                    }
                }
                
                resp.send(cuidadoresPerto);

            }
        });

    } catch (err) {
        return resp.status(400).send({ error: "Erro ao buscar cuidadores"});
    }

    async function enderecoCuidador(cuidadores) {
        
        for (let index = 0; index < cuidadores.length; index++) {

            let cuidador = cuidadores[index];
            
            var user = await User.find({ _id: cuidador.idCuidador })
          
            cuidadoresEndereco.push({ user: user, cuidador: cuidador });
        }
        return cuidadoresEndereco; 
    }
    
});

app.get('/cuidador_idoso/:latitude/:longitude', function(req, resp){

    const latitudeUsuario = req.params.latitude;
    const longitudeUsuario = req.params.longitude;

    var cuidadoresEndereco = [];
    var cuidadoresPerto = [];

    try {

        const cuidadores = Cuidador_Cachorro.find(async function(error, cuidadores){
            if (error) {
                return resp.status(400).send({ error: "Erro ao buscar cuidadores de cachorro"});
            } else {
                var teste = await enderecoCuidador(cuidadores)

                for (let index = 0; index < teste.length; index++) {
                    var user = teste[index].user;

                    var latitude = user[0].latitude;
                    var longitude = user[0].longitude;

                    var dist = CalcularDistancia(latitude, longitude, latitudeUsuario, longitudeUsuario);
                    
                    if (dist <= 5){
                        cuidadoresPerto.push({ user: user[0], cuidador: teste[index].cuidador, distancia: dist});
                    }
                }
                
                resp.send(cuidadoresPerto);

            }
        });

    } catch (err) {
        return resp.status(400).send({ error: "Erro ao buscar cuidadores"});
    }

    async function enderecoCuidador(cuidadores) {
        
        for (let index = 0; index < cuidadores.length; index++) {

            let cuidador = cuidadores[index];
            
            var user = await User.find({ _id: cuidador.idCuidador })
          
            cuidadoresEndereco.push({ user: user, cuidador: cuidador });
        }
        return cuidadoresEndereco; 
    }
    
});


app.post('/solicitacoes',  function(req, resp){

    try {

        const solicitacoes = Solicitacoes.find({ idUsuarioCuidador: req.body.id }, function(error, solicitacoes){
            if (error) {
                return resp.status(400).send({ error: "Erro ao buscar cuidadores de idoso"});
            } else {
                return resp.send({ solicitacoes });
            }
        });

    } catch (err) {
        return resp.status(400).send({ error: "Erro ao buscar solicitações"});
    }
});

    
function CalcularDistancia(Latitude1, Longitude1, Latitude2, Longitude2){

    var RaioTerraEmKM = 6377.99121;
    var PI  = Math.PI;

    var lat1Radians ;
    var long1Radians ;
    var lat2Radians ;
    var long2Radians ;

    lat1Radians = Latitude1 * PI / 180;
    long1Radians = Longitude1 * PI / 180;
    lat2Radians = Latitude2 * PI / 180;
    long2Radians = Longitude2 * PI / 180;

    return Math.acos(
        Math.cos(lat1Radians) * Math.cos(long1Radians) * Math.cos(lat2Radians) * Math.cos(long2Radians) + 
        Math.cos(lat1Radians) * Math.sin(long1Radians) * Math.cos(lat2Radians) * Math.sin(long2Radians) + 
        Math.sin(lat1Radians) * Math.sin(lat2Radians)
        ) * RaioTerraEmKM;

}

module.exports = app;