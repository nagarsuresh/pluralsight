var fs = require('fs');

var data = [];
function generateIps() {
    for (var i = 1; i < 2; i++) {
        for (var j = 1; j < 2; j++) {
            for (var k = 1; k < 200; k++) {
                for (var l = 1; l < 255; l++) {
                    data.push(i + "." + j + "." + k + "." + l);
                }
            }
        }
    }
}


generateIps();
console.log("Generated "+data.length+" IPs");
fs.writeFile("ips.txt", data.join(","));
