var mongoose = require('mongoose'); 

const CuidadorIdosoSchema = new mongoose.Schema({

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
    }
});

const Cuidador_Idoso = mongoose.model('Cuidador_Idoso', CuidadorIdosoSchema);

module.exports = Cuidador_Idoso;