function merge(array1, array2) {
    //check if 2 arrays were entered
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        console.log("Please enter only arrays");
        return;
    }
    //check if arrays only contains numbers
    if (array1.some(isNaN) || array2.some(isNaN)) {
        console.log("Please enter only numbers into array");
        return;
    }
    //concatenates the arrays
    var newArray = [];
    for (var index = 0; index < array1.length; index++) {
        newArray.push(array1[index]);
    }
    for (var i = 0; i < array2.length; i++) {
        newArray.push(array2[i]);
    }
    //sort the concatenated array
    newArray = newArray.sort(function (a, b) {
        return a - b;
    });
    return newArray;
}

x = merge([7, 2], [12, 3]);
console.log(x);