var mongoose = require('mongoose'); 

const ServicoSchema = mongoose.Schema({

    tipo: {
        type: String,
        require: true
    },
    dataInicio: {
        type: String,
        require: true
    },
    dataFim: {
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
        require: true
    }
});

const Servico = mongoose.model('Servico', ServicoSchema);

module.exports = Servico;