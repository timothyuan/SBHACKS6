var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send("hello world");
});

app.listen(3000, '0.0.0.0', function() {
    console.log('Listening to port: ' + 3000);
});
