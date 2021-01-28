var mongoose = require('mongoose'); 

const CuidadorCachorroSchema = new mongoose.Schema({

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

const Cuidador_Cachorro = mongoose.model('Cuidador_Cachorro', CuidadorCachorroSchema);

module.exports = Cuidador_Cachorro;