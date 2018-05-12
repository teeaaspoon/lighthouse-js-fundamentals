function concat(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        console.log("Please enter only arrays");
        return;
    }
    var newArray = [];
    for (var index = 0; index < array1.length; index++) {
        newArray.push(array1[index]);
    }
    for (var i = 0; i < array2.length; i++) {
        newArray.push(array2[i]);
    }
    return newArray;
}

x = concat([1, 2], [7, 9]);
console.log(x);