var express = require('express')
  , app = express();

app.get('/', function (req, res) {
  res.send('Utilizando Express no nodejs...subindo nova versão');
});

app.listen(21013);