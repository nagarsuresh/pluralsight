var arr = [];

arr[10] = 'Ten';
arr[12] = 'Tweleve';

arr['test'] = 'abc';

console.log(arr.length); //prints 13 - one more than the height numeric subscript

console.log(-10 % 3); // -1
console.log(10 % -3); // 1


console.log(-10 / 3); // 3
console.log(10 / -3); // 3


var x = false && null;

var y = false || 0;

console.log(x);
console.log(y);


arr = [1, 2, 3, 4, 4, 5, 65, 6, 7];
var result = arr.every(function (num) {
    return num % 2 == 0;
});

console.log("Result of every " + result);

result = arr.some(function (num) {
    return num > 50;
});

console.log("Result of some " + result);


Array.prototype.matrix = function (rows, cols, initial) {

    var arr = [];
    for (var i = 0; i < rows; i++) {
        var columns = [];
        for (var j = 0; j < cols; j++) {
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
}

var matrix = [].matrix(3, 3, 10);

console.log(matrix);


arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

result = arr.reduceRight(function reduce(sum, value) {
    return "" + sum + value;
});

console.log(result);