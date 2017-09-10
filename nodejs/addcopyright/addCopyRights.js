var fs = require('fs');

var SOURCE_PATH = "./Source";
var DESTINATION_PATH = "./Destination";
var COPYRIGHT = `/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

`;


var files = fs.readdirSync(SOURCE_PATH);
var allFiles = [];
for (var i = 0; i < files.length; i++) {
    accumulateFiles(SOURCE_PATH + "/" + files[i], allFiles);
}

console.log(allFiles.length);

var EXTENSIONS = ["ts"];

for (var i = 0; i < allFiles.length; i++) {
    var fileName = allFiles[i];
    var parts = fileName.split(".");
    var extension = ""
    if (parts.length > 0) {
        extension = parts.pop();
    }

    if (EXTENSIONS.indexOf(extension) != -1) {
        addCopyRight(fileName);
    }
}


function addCopyRight(fileName) {
    fs.readFile(fileName, "utf-8", (err, data) => {
        if (err) {
            throw err;
        }

        var newContents = COPYRIGHT + data;
        writeFile(fileName, newContents);
    });
}

function writeFile(fileName, contents) {
    fs.writeFile(fileName, contents, (err) => {
        if (err) {
            throw err;
        }
    });
}


function accumulateFiles(directory, allFiles) {
    var stats = fs.statSync(directory);
    if (stats.isFile()) {
        allFiles.push(directory);
    } else {
        var files = fs.readdirSync(directory);
        for (var i = 0; i < files.length; i++) {
            accumulateFiles(directory + "/" + files[i], allFiles);
        }
    }
}