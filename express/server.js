var express = require('express');
var request = require('request');
var jade = require('jade');

var app = express();
app.use(express.static(__dirname + '/bower_components'));
app.get('/', function(req, res){
  var html = jade.renderFile('./views/index.jade');
  res.send(html);
});

app.get('*',function(req, res) {
  request('http://m.auto.co.il/autoAPI.svc' + req.url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(JSON.parse(body));
      }
  });
});

app.listen(3000);
