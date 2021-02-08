const express = require('express');
const app = express(); 

const jwt = require('jsonwebtoken');
const autenticacaoConfig = require('../config/autenticacao.json');

const User = require('../model/usuario');
const Cuidador_Cachorro = require('../model/cuidador_cachorro');
const Cuidador_Crianca = require('../model/cuidador_criança');
const Cuidador_Idoso = require('../model/cuidador_idoso');

app.post('/cuidador_cachorro', async function(req, resp){

    const latitudeUsuario = req.body.latitude;
    const longitudeUsuario = req.body.longitude;
    console.log(latitudeUsuario);
    console.log(longitudeUsuario);

    var cuidadoresPerto = [];

    try {

        const cuidadores = Cuidador_Cachorro.find( async function(error, cuidadores){
            if (error) {
                return resp.status(400).send({ error: "Erro ao buscar cuidadores de cachorro"});
            } else {
                console.log("cuidadores " + cuidadores);

                cuidadores.forEach(async cuidador => {

                    console.log("cuidador ===" + cuidador);

                    console.log("id cuidador ===" + cuidador.idCuidador);

                    const idCuidador = cuidador.idCuidador;

                    await User.findById( idCuidador, function(error, user){
                        if(error){
                            resp.send('Erro do DB...: ' + error);
                        } else {
                                
                            console.log("cadastro usuarioooooooo " + user);

                            console.log(user.latitude);
                            console.log(user.longitude);

                            const dist = CalcularDistancia(latitudeUsuario, longitudeUsuario, user.latitude, user.longitude);
                            console.log("distanciaaaaaaaaaaaaa"+dist);

                            if (dist <= 5){
                                cuidadoresPerto.push({user: user, cuidador: cuidador});
                            }
                        }
                    });
                    
                });

                console.log("Cuidadores pertoo de vccc -------" + cuidadoresPerto);

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

    
function CalcularDistancia(Latitude1, Longitude1, Latitude2, Longitude2){

    console.log("entrou na função !!!!!!!!!!!!")
    console.log(Latitude1);
    console.log(Longitude1);
    console.log(Latitude2);
    console.log(Longitude2);

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