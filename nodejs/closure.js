function main() {
    var x = 10;
    var me = this;
    this.y = 20;
    return function () {
        console.log("This is " + this + " x is " + x);
        console.log("me is " + me + " x is " + x);
        console.log("Y is " + this.y);
        console.log("Y is " + me.y);
    }
}


var m = new main();
console.log(this);


m();


function isEmpty(value) {
    value = typeof value === 'string' ? value.trim() : value;
    return (value == null) || value === '' ||
        (Array.isArray(value) && value.length === 0);
}

// console.log(isEmpty(null));
// console.log(isEmpty(undefined));
// console.log(isEmpty('   '));
// console.log(isEmpty(""));
// console.log(isEmpty([]));
// console.log(isEmpty([2]));
// console.log(isEmpty("test"));
// console.log(isEmpty({}));



// console.log("[" + "   to be trimmed   ".replace(/\s+/g, "") + "]");


// console.log(Math.pow(1.01, 370));




function closure() {
    var i = 0;


    for (i = 0; i < 5; i++) {
        setTimeout(function (i) {
            console.log("i:" + i);
        }.bind({}, i), 200);
    }
}


closure();


function closure2() {
    var i = 0;
    for (i = 0; i < 5; i++) {
        try { throw i } catch (i) {
            setTimeout(function () {
                console.log("i:" + i);
            }, 200);
        }
    }
}

// closure2();


function closure3() {
    "use strict";
    for (let i = 0; i < 5; i++) {
        setTimeout(function () {
            console.log("-->" + i)
        }, 200);
    }
}

closure3();


