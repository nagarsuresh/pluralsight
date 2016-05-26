var express = require('express');
var MyService = require('./invokeService.js');


var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.send('Hello World');
});


app.get('/assessments', function (req, res) {
    try {
        MyService.invokeRestService('/traksmart4/api/rest/auditapp/v1/assessments/listOverviewActive.json', 'GET', {}, function (list) {
            
            res.send(list);
        });
    }
    catch (error) {
        console.log(error);
    }

});

var server = app.listen(8081, function () {
    var port = server.address().port
    console.log("Example app listening " + port);
});



