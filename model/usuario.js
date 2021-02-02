var mongoose = require('mongoose'); 
const bcrypt = require("bcryptjs");

const UsuarioSchema = new mongoose.Schema({
    
    nome: {
        type: String,
        require: true
    },
    dataNasc: {
        type: String,
        require: true
    },
    senha: {
        type: String,
        require: true,
        select: false
    },
    CPF: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase:true
    },
    tipoUsuario: {
        type: String,
        require: true
    },
    genero: {
        type: String,
        require: true
    },
    celular: {
        type: String,
        require: true
    },
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
    }
});

UsuarioSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;

    next();
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;