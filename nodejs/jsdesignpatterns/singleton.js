var MySingleton = (function () {
    var instance = null;

    function getInstance() {
        if (instance == null) {
            instance = new Object("My Object");
        }
        return instance;
    }

    return {
        getInstance: getInstance
    }
})();



var instance1 = MySingleton.getInstance();
var instance2 = MySingleton.getInstance();


console.log(instance1 === instance2);