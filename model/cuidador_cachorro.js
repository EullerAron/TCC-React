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
    },
    domingoManha: {
        type: Boolean,
        require: true
    },
    segundaManha: {
        type: Boolean,
        require: true
    },
    tercaManha: {
        type: Boolean,
        require: true
    },
    quartaManha: {
        type: Boolean,
        require: true
    },
    quintaManha: {
        type: Boolean,
        require: true
    },
    sextaManha: {
        type: Boolean,
        require: true
    },
    sabadoManha: {
        type: Boolean,
        require: true
    },
    domingoTarde: {
        type: Boolean,
        require: true
    },
    segundaTarde: {
        type: Boolean,
        require: true
    },
    tercaTarde: {
        type: Boolean,
        require: true
    },
    quartaTarde: {
        type: Boolean,
        require: true
    },
    quintaTarde: {
        type: Boolean,
        require: true
    },
    sextaTarde: {
        type: Boolean,
        require: true
    },
    sabadoTarde: {
        type: Boolean,
        require: true
    },
    domingoNoite: {
        type: Boolean,
        require: true
    },
    segundaNoite: {
        type: Boolean,
        require: true
    },
    tercaNoite: {
        type: Boolean,
        require: true
    },
    quartaNoite: {
        type: Boolean,
        require: true
    },
    quintaNoite: {
        type: Boolean,
        require: true
    },
    sextaNoite: {
        type: Boolean,
        require: true
    },
    sabadoNoite: {
        type: Boolean,
        require: true
    }
});

const Cuidador_Cachorro = mongoose.model('Cuidador_Cachorro', CuidadorCachorroSchema);

module.exports = Cuidador_Cachorro;