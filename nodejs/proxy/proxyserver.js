var express = require('express');  
var request = require('request');

var app = express();
var apiServerHost = "http://localhost:8080"  
app.use('/', function(req, res) {  
  var url = apiServerHost + req.url;
  req.pipe(request(url)).pipe(res);
});

app.listen(3000);  

