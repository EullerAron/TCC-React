var mongoose = require('mongoose'); 

const CuidadorCriancaSchema = new mongoose.Schema({

    idCuidador: {
        type: String,
        require: true
    },
    agenda: {
        type: String,
        require: true
    },
    valor: {
        type: Number,
        require: true
    },
    descricao: {
        type: String,
        require: true
    },
    localCuidado: {
        type: String,
        require: true
    },
    sexo: {
        type: String,
        require: true
    },
    idadeMin: {
        type: Number,
        require: true
    },
    idadeMax: {
        type: Number,
        require: true
    }
});

const Cuidador_Crianca = mongoose.model('Cuidador_Crianca', CuidadorCriancaSchema);

module.exports = Cuidador_Crianca;