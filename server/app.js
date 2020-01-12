var cors = require('cors');
var express = require('express');
var mysql = require('mysql');
var app = express();

app.use(cors());

var con = mysql.createConnection(config);

con.connect(function(err) {
	if (err) throw err;
	console.log("connected!");
});

app.get('/hello', function(req, res) {
  res.send("hello world");
});

app.post('/createGame', function(req, res) {
  var num_players = req.body.num_players;
  var num_images = req.body.num_images;
  var sql = "INSERT INTO games (num_players, num_images) values ('"+num_players+"', '"+num_images+"')";
  con.query(sql, function (err, result) {
  if (err) {
    console.log(err);
    res.status(400);
    res.end()
  }else{
    console.log('inserted');
    res.status(200).send({num_players: num_players});
  }
  });
});

app.listen(3000, '0.0.0.0', function() {
    console.log('Listening to port: ' + 3000);
});
