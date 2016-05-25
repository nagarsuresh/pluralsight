
function y(arg) {
    console.log(arg);
    return arg;
}
var x = y



    //need to wrap in braces if function is in declaration side.
    //if ; not inserted in x=y - that will execute y as function passing result of this function as argument !!!!
    (function () {
        console.log("invoked");
        return 10;
    } ());

console.log(x);

//dont need to wrap in braces if function is assignment.
var X = function () {
    return 'Invoked';
} ();

console.log(X);



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


function getCar(model, make, wheels) {
    var vehicle = getVehicle(wheels);
    vehicle.model = model;
    vehicle.make = make;
    return vehicle;
}

function getVehicle(wheels) {
    return {
        wheels: wheels
    }
}



function addf(x) {
    return function (y) {
        return x + y;
    }
}

console.log(addf(2)(3));


function add(a, b) {
    return a + b;
}
function mul(a, b) {
    return a * b;
}

function applyf(binary) {
    return function (x) {
        return function (y) {
            return binary(x, y);
        }
    }
}

var a1 = applyf(add);
console.log(a1(3)(4));
var a2 = applyf(mul)(3)(4);
console.log(a2);


function curry(func, x) {
    return function (y) {
        return func(x, y);
    }
}

var add3 = curry(add, 3);
console.log(add3(4));

console.log(curry(mul, 5)(6));




function methodize(func) {
    return function (x) {
        return func(this, x);
    }
}

Number.prototype.add = methodize(add);
console.log((3).add(4));


function demethodize(func) {
    return function (x, y) {
        return func.call(x, y);
    }
}

console.log("Demethodize : " + (demethodize(Number.prototype.add)(5, 6)));


function twice(binary) {
    return function (x) {
        return binary(x, x);
    }
}

var t1 = twice(add);
console.log(t1(10));


function composeu(func1, func2) {
    return function (x) {
        return func2(func1(x));
    }
}


function composeb(func1, func2) {
    return function (a, b, c) {
        return func2(func1(a, b), c);
    }
}


function once(func) {
    var x = false;

    return function (a, b) {
        if (x) {
            throw "Boom!";
        }
        x = true;
        return func(a, b);
    }
}

var o1 = once(add);
console.log(o1(2, 3));
// console.log(o1(2, 3));


function counterf(x) {
    var inc = function () {
        return x += 1;
    }
    var dec = function () {
        return x -= 1;
    }
    return {
        inc: inc,
        dec: dec
    }
}


var counter = counterf(10);
console.log(counter.inc());
console.log(counter.dec());


function revocable(func) {
    // var isRevoked = false;

    var invoke = function (x) {
        // if (isRevoked) {
        //     throw "Its Revoked";
        // }
        return func(x);
    }
    var revoke = function () {
        // isRevoked = true;
        func = null;
    }

    return {
        invoke: invoke,
        revoke: revoke
    }
}

var temp = revocable(console.log);
temp.invoke("hello");
temp.revoke();
temp.invoke("hello again");