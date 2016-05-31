function createPromise(num) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (num % 2 === 0) {
                resolve(num);
            } else {
                reject(num + " is not even");
            }

        }, 500);
    });
}

createPromise(1).then(function (result) {
    console.log("in Then 1 result " + result);
    return createPromise(1);
}).catch(function (result) {
    console.log("In Promise 1 catch "+result);
    return 20;
}).then(function(result){
    console.log("In Promise 2 result  "+result);
});


// .then(function (r1) {
//     console.log("in Then 2 result " + r1);
// }).then(function (r2) {
//     console.log("in Then 3 result " + r2);
// });

