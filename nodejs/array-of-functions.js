var arr = getFunctionArray(10);

console.log(arr[3]()); //3
console.log(arr[5]()); //5


function getFunctionArray(n) {
    var arr = [];

    for (var i = 0; i < n; i++) {
        try {
            throw i
        } catch (n) {
            arr.push(
                function () {
                    return n;
                }
            )
        }
        // arr.push(
        //     function (i) {
        //         return function () {
        //             return i;
        //         }
        //     }(i)
        // );
    }

    return arr;

}