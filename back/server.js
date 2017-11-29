var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

//variable para poder usar el request-json
var requestJson = require('request-json');
//variable para que se pueda parsear el req.body y no salga como undefined
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json

var path = require('path');

var urlmovimientosMlab = "https://api.mlab.com/api/1/databases/bdbanca/collections/movimientos?apiKey=50c5ea68e4b0a97d668bc84a";
var clienteMlab = requestjson.createClient(urlmovimientosMlab);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

app.get('/movimientos', function(req, res) {
  //res.sendFile(path.join(__dirname, 'index.html'));
    clienteMlab.get('', function(err, resM, body) {
      if(err)
      {
        console.log(body);
      }
      else
      {
        res.send(body);
      }
    });
});

app.post('/movimientos', function(req, res) {
  /* Crear movimiento en MLab */

});

app.get('/movimientos/:idcliente', function (req, res) {
  /* Obtener movimientos del cliente idcliente desde MLab */
})
