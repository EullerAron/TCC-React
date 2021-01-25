const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/dbTeste", { useMongoClient: true })
  .then(function () {
    console.log("MongoDB Conectado...");
  })
  .catch(function (err) {
    console.log("Erro ao conectar ao DB: " + err);
  });

const port = process.env.PORT || 5000;
 

