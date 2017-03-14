var express = require('express')

var rutasExpediente = require('routes/expedientes');
var rutasArea = require('routes/areas');

var app = express()

app.use(express.static(__dirname + '/public'));

app.use('/api/area', rutasArea);
app.use('/api/expediente', rutasExpediente);


console.log("iniciando...");

app.listen(3000);

console.log("iniciado");