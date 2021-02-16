var mongoose = require('mongoose'); 

const ServicoSchema = mongoose.Schema({

    tipo: {
        type: String,
        require: true
    },
    data: {
        type: String,
        require: true
    },
    idUsuarioCuidador: {
        type: String,
        require: true
    },
    idUsuarioCliente: {
        type: String,
        require: true
    },
    aceite: {
        type: Boolean,
        require: false
    },
    nomeCliente: {
        type: String,
        require: true
    },
    bairroCliente: {
        type: String,
        require: true
    },
    cidadeCliente: {
        type: String,
        require: true
    },
    localCuidado: {
        type: String,
        require: true
    },
    telefoneCliente: {
        type: String,
        require: true
    }
});

const Servico = mongoose.model('Servico', ServicoSchema);

module.exports = Servico;