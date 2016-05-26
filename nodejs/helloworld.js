var MyClass = function () {
    var name = "Suresh";
    var friend = "Rajesh";

    var printMe = function () {
        return name + " has a friend " + friend;
    }
    
    return {
        printMe : printMe,
        friend : friend
    }
    
}


var obj = new MyClass();
obj.friend = "asdfsdfsdf";
console.log(obj);
console.log(obj.printMe());