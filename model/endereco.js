var mongoose = require('mongoose'); 

const EnderecoSchema = mongoose.Schema({

    cep: {
        type: String,
        require: true
    },
    estado: {
        type: String,
        require: true
    },
    cidade: {
        type: String,
        require: true
    },
    rua: {
        type: String,
        require: true
    },
    numero: {
        type: String,
        require: true
    },
    bairro: {
        type: String,
        require: true
    },
    idUsuario: {
        type: String,
        require: true
    }
});