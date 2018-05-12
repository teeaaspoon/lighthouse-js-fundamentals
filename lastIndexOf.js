function lastIndexOf(array, value) {
    var length = array.length - 1;
    while (length >= 0) {
        if (value === array[length]) {
            return length;
        } else {
            length = length - 1;
        }
    }
    return -1;
}

var trance = [1, 2, 3, 4, 1, 2, 5];

x = lastIndexOf(trance, 6);
console.log(x);