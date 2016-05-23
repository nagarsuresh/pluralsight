var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
}


Task.prototype.save = function () {
    console.log("Saving task " + this.name);
    this.fireEvent('save');
}


Task.prototype.listeners = {};

Task.prototype.addListener = function (event, listener) {
    this.listeners[event] = listener;
}
Task.prototype.removeListener = function (event) {
    delete this.listeners[event];
}
Task.prototype.fireEvent = function (eventName) {
    var listener = this.listeners[eventName];
    if (listener && typeof (listener) == 'function') {
        listener(this);
    }
}



var LoggingService = (function () {
    function log(data) {
        console.log("Logging data " + JSON.stringify(data));
    }
    return {
        execute: log
    }
})();


var t1 = new Task({name : "Test task1 "});
t1.addListener('save', LoggingService.execute);
t1.save();
t1.removeListener('save');
t1.save();





