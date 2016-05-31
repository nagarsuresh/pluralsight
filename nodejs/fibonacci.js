function fibonacci(n) {
    var fibo = [0, 1];

    if (n <= 2) {
        return 1;
    }

    for (var i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }

    return fibo;
}


console.log(fibonacci(12));


var str = "i am a good boy";
console.log(str.split(' ').reverse().join(' '));
console.log(str.split(' ').reverse().join(' ').split('').reverse().join(''));