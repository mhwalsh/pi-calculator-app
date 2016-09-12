var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//modules
var calculate = require('./modules/calculator');

var app = express();

//middleware to serve static files
app.use(express.static('public'));

//middleware to parse request body - json
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/views/index.html' ));
});

app.post('/', function(req, res) {
  console.log('in post route');
  console.log('req.body in post =', req.body);
  var result = calculate(req.body);

  var returnObject = {
    answer: result
  };

  res.send(returnObject);
});

var server = app.listen('3000', function() {
  var port = server.address().port;
  console.log('listening on port', port);
});
