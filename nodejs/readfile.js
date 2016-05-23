var readline = require('readline');

var fs = require('fs');

var lineReader = readline.createInterface({
    input: fs.createReadStream('jsdesignpatterns/singleton.js')
});

var lines = [];
lineReader.on('line', function (line) {
    lines.push(line);
});

lineReader.on('end', function () {
    console("end...." + lines.length);
    var out = fs.createWriteStream('textwords.txt');
    out.once('open', function () {
        for (var i = 0; i < lines.length; i++) {
            stream.write(lines[i]);
        }
    });
});

lineReader.close();






