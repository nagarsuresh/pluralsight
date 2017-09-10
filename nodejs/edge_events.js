var request = require("request");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var count = 0;
var HOW_MANY = 200;

function createLS() {
    if (++count > HOW_MANY) {
        return;
    }
    var options = {
        method: 'PUT',
        url: 'https://10.192.157.244/api/4.0/edges/edge-2/dnsclient',
        headers:
        {
            'postman-token': '5508e880-e543-abee-4223-f64dd6270227',
            'cache-control': 'no-cache',
            'content-type': 'application/xml',
            authorization: 'Basic YWRtaW46ZGVmYXVsdA=='
        },
        body: '<dnsClient>\n <primaryDns>10.117.0.' + count + '</primaryDns>\n <secondaryDns>10.117.0.2</secondaryDns>\n <domainName>vmware.com</domainName>\n <domainName>foo.com</domainName>\n</dnsClient>'
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
        console.log("Calling for " + count);
        createLS();
    });
}

createLS();
