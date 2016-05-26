const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var ask = function () {
    rl.question("What is your year of birth ", function (answer) {
        var year = Number(answer);
        if (isNaN(year)) {
            console.log("Not a nice year to be born on !.. Wanna retry ?");
            return ask();
        }
        var age = new Date().getFullYear() - year;
        
        if(age < 0){
            console.log("fat fingers... check what you wrote ");
            return ask();
        }

        console.log("You are " + age + " years old");
        rl.close();
    });

}

ask();
