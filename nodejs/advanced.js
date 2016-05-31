var foo = "bar";

function bar() {
    var foo = "baz";

    function baz(foo) {
        foo = "bam";
        bam = "yay";

        console.log("foo " + foo + " bam " + bam);
    }
    baz();

    console.log("Foo after baz " + foo);
}

//bar();
//console.log(foo);
// console.log(bam);
// baz();


var f = function tryTest() {
    var nothing;

    {
        var inBlock = "yes";
    }

    var obj = { a: 1, b: 2 };

    try {
        throw obj;
    } catch (obj) {
        console.log(obj.a);
        console.log(obj.b);
        obj.a = 10;
    }

    console.log("here... " + obj.a);



    try { throw 1 } catch (a) {
        try { throw 2 } catch (b) {
            console.log(a, b);
        }
    }


    // console.log("inCatch " + inCatch);
    // console.log("inBlock " + inBlock);
    // console.log("err " + err);
}

f();

function timeout() {
    'use strict';

    for (let i = 0; i < 5; i++);

    // console.log(i); //error here!!! i not defined.


}
timeout();




var value = a(1);
console.log(value);


function a(foo) {
    if (foo > 20) return foo;
    return b(foo + 2);
}
function b(foo) {
    return c(foo) + 1;
}
function c(foo) {
    return a(foo * 2);
}




var hello = "Suresh";
function strict(){
    // 'use strict';
    console.log("---->"+this.hello);
}

strict();



function* generator(){
  var index = 0;
  while (index <= 2)
    yield index++;
}

var iter = generator();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
