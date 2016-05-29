function printArgs() {
    console.log(Array.prototype.slice.call(arguments));
}


function appendArgs() {
    var funcName = arguments[0];
    var args = Array.prototype.slice.call(arguments, 1);

    return function () {
        var innerArgs = Array.prototype.slice.call(arguments);
        innerArgs = innerArgs.concat(args);
        funcName.apply(null, innerArgs);
    }
}


function prependArgs() {
    var funcName = arguments[0];
    var args = Array.prototype.slice.call(arguments, 1);

    return function () {
        var myArgs = Array.prototype.slice.call(arguments);
        var totalArgs = args.concat(myArgs);
        funcName.apply(null, totalArgs);
    }
}

// printArgs(1, 2, 3, 4, 5);
var newFunc = appendArgs(printArgs, 10, 20, 30);
newFunc(1, 2, 3, 4, 5);

var prependFunc = prependArgs(printArgs, 10, 20, 30);
prependFunc(1, 2, 3, 4, 5);
prependFunc(1, 2, 3, 4, 5);
