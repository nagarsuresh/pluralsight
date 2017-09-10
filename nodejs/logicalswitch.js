var request = require("request");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var count = 0;
var HOW_MANY = 25;

function createLS() {
    if (++count > HOW_MANY) {
        return;
    }
    var options = {
        method: 'POST',
        url: 'https://10.192.157.244/api/2.0/vdn/scopes/vdnscope-1/virtualwires',
        headers:
        {
            'postman-token': '83386c16-e3fd-c7eb-b0be-04b5e2f880dd',
            'cache-control': 'no-cache',
            'content-type': 'application/xml',
            "rejectUnauthorized": false,
            authorization: 'Basic YWRtaW46ZGVmYXVsdA=='
        },
        body: '<virtualWireCreateSpec>\n\t<name>LS42</name>\n\t<description>For guest VLAN tagging</description>\n\t<tenantId>virtual wire tenant</tenantId>\n\t<guestVlanAllowed>true</guestVlanAllowed>\n</virtualWireCreateSpec>'
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
        console.log("Calling for " + count);
        createLS();
    });
}

createLS();
