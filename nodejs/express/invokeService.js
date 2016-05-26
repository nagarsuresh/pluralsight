
var http = require('http');
var querystring = require('querystring');

var MyService = function () {
    var localhost = "localhost";
    var authorization = "Basic bmV4YW50c3VwcG9ydDpUZXN0LjEyMw==";

    function invokeRestService(endpoint, method, data, callback) {
                var dataString = JSON.stringify(data);
    } {
        var dataString = JSON.stringify(data);
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': authorization,
            'orgid': 1
        };

        if (method == 'GET') {
            endpoint += '?' + querystring.stringify(data);
        }
        else {
            headers['Content-Length'] = dataString.length;
        }
        var options = {
            host: localhost,
            path: endpoint,
            method: method,
            headers: headers,
            port: 8080
        };

        var req = http.request(options, function (res) {
            res.setEncoding('utf-8');

            var responseString = '';

            res.on('data', function (data) {
                responseString += data;
            });

            res.on('end', function () {
                try {
                    var responseObject = JSON.parse(responseString);
                    callback(responseObject);
                } catch (error) {
                    console.log(error);
                    callback({
                        message: 'Nothing!!!'
                    });
                }
            });
        });

        req.on('error', function (err) {
            console.log("Error : Not able to connect !!");
            callback({
                message: 'Error encountered ' + String(err)
            })
        });

        req.write(dataString);
        req.end();
    }

    return {
        invokeRestService: invokeRestService
    }

}


module.exports = new MyService();

