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

console.log(isEmpty(null));
console.log(isEmpty(undefined));
console.log(isEmpty('   '));
console.log(isEmpty(""));
console.log(isEmpty([]));
console.log(isEmpty([2]));
console.log(isEmpty("test"));
console.log(isEmpty({}));



console.log("[" + "   to be trimmed   ".replace(/\s+/g, "") + "]");


console.log(Math.pow(1.01,370));


