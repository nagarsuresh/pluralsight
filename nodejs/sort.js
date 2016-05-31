function selectionSort(arr) {
    var i = 0, j = 0, t, min = 0;


    for (i = 0; i < arr.length - 1; i++) {
        min = i;
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        // console.log("\nSwapping " + arr[i] + " with " + arr[min]);
        t = arr[i];
        arr[i] = arr[min];
        arr[min] = t;
        // print(arr);
    }


}

function print(arr) {
    var index = [];
    var vals = [];
    var pad = "     ";
    for (var i = 0; i < arr.length; i++) {
        index.push((pad + i).slice(-4));
        vals.push((pad + arr[i]).slice(-4));
    }
    console.log("" + vals.join(''));
    console.log("" + index.join('') + "\n");
}


var arr = [];
for (var i = 0; i < 20; i++) {
    arr.push(Math.round(Math.random() * 100));
}

console.log("Starting with ");
print(arr);
selectionSort(arr);
print(arr);

var value = arr[Math.round(Math.random() * 20)];
console.log("Searching value " + value);

var index = binarySearch(arr, value);

console.log("Found at " + index);


function binarySearch(arr, data) {
    var upper = arr.length - 1;
    var lower = 0;
    var mid;

    while (lower <= upper) {
        mid = Math.floor((lower + upper) / 2);
        if (data > arr[mid]) {
            lower = mid + 1;
        } else if (data < arr[mid]) {
            upper = upper - 1;
        } else {
            return mid;
        }
    }
    return -1;
}



