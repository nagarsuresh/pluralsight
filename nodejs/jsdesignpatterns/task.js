'use strict'

var task = {
    title: 'My Title',
    description: 'My Description'
}


Object.defineProperty(task, 'toString', {

    get: function () {
        return this.title + ' ' + this.description;
    },
    configurable: false,
    enumerable: true
});


console.log(Object.keys(task));


console.log(task.toString);