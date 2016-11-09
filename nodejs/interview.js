//variable hoisting
function f1() {
    console.log("x is " + x);
    var x = 10;
}

f1();

//new keyword
function f2() {
    var val = 10;
    return {
        val: val
    }
}
var x = new f2();
var y = f2();

console.log("x == y " + (x.val === y.val));

//singeton
var singeton = function () {
    var instance = null;
    function getInstance() {
        if (instance == null) {
            instance = { value: Math.random() * 10 }
        }
        return instance;
    }
    return {
        getInstance: getInstance
    }
} ();

console.log("exec 1 " + singeton.getInstance().value);
console.log("exec 2 " + singeton.getInstance().value);

Array.prototype.mul = function (x) {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
        console.log(this[i]);
        arr.push(this[i] * x);
    }
    return arr;
}
var arr = [10, 20, 40, 59, 12].mul(10);
console.log(arr);

//closures!!!
// var nodes = document.getElementsByTagName('button');
// for (var i = 0; i < nodes.length; i++) {
//    nodes[i].addEventListener('click', function() {
//       console.log('You clicked element #' + i);
//    });
// }

function add(x) {
    return function (y) {
        return x + y;
    }
}
console.log("Add " + add(10)(20));


//inheritence
//Vehicle and Car
var Car = function (model, make, wheels) {
    Vehicle(wheels);
    this.model = model;
    this.make = make;
}

var Vehicle = function (wheels) {
    this.wheels = wheels;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;


//function prepend arguments to the function!

//binary tree or linked list ?

//css
//box model
//selectors - specificity
//round ball with colors!



var ads = [{url:'a.gif', weight:50},{url:'b.gif', weight:25},{url:'c.gif', weight:25}];

function findAd(ads){
    
    //return an ad 

}

var ad = findAd(ads);














