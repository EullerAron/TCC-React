const jwt = require('jsonwebtoken');
const autenticacaoConfig = require('../config/autenticacao.json');

module.exports = function (req, resp, next) {
    console.log("entrou no middlewareeeeeeeee");
    //busca o token no header da requisição
    const autenticacaoHeader = req.headers['x-access-token'];

    //verifica se esse token existe
    if (!autenticacaoHeader){
        return resp.status(401).send({ error: 'Sem token de autenticação'});
    }
    console.log("estou aq 1");
    //divite o token em duas partes (exemplo de token "Bearer ejfmiweojr3984ut8723384brf08f") e verifica se tem duas partes
    const partes = autenticacaoHeader.split(' ');

    if (!partes.length === 2){
        return resp.status(401).send({ error: "Sem token"});
    }
    console.log("estou aq 2");
    //divide o token em duas partes
    const [ scheme, token ] = partes;

    //verifica se a primeira parte é Bearer
    if (!/^Bearer$/i.test(scheme)){
        return resp.status(401).send({ error: "Token mal formado"});
    }

    console.log("estou aq 3");
    //ultima verificação de token
    jwt.verify(token, autenticacaoConfig.secret, function (err, decoded) {
        if (err) {
            return resp.status(401).send({ error: "Token invalido"});
        }
        console.log("estou aq 4");
        req.userId = decoded.id;
        next();
    })
}