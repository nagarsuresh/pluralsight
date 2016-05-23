var Person = function (data) {
    this.name = data.name;
    this.address = data.address;

}

Person.prototype.print = function () {
    console.log("Print in the Person");
}


var Employee = function (data) {
    Person.call(this, data);
    this.number = data.number;

}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

var e1 = new Employee({ name: 'suresh', address: '620 iris avenue', number: 10 });

console.log("Employee e1 "+JSON.stringify(e1));
console.log("e1 constructor "+e1.constructor);
console.log("e1 proto "+e1.__proto__);
console.log("e1.proto.proto "+e1.__proto__.__proto__);
console.log("e1.proto.proto.proto "+e1.__proto__.__proto__.__proto__);