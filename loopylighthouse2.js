function loopylighthouse_refactor(range, multiples, words) {
    // range check
    if (!Array.isArray(range)) {
        console.log("Please enter the range in an array");
        return;
    }
    if (range.some(isNaN)) {
        console.log("Please enter a valid range");
        return;
    }
    if (range[0] == undefined || range[1] == undefined) {
        console.log("Please enter a valid range");
        return;
    } else if (range[0] > range[1]) {
        console.log("Please enter a valid range");
        return;
    }
    // multiples check
    if (!Array.isArray(multiples)) {
        console.log("Please enter 2 multiples in an array");
        return;
    }
    if (multiples.some(isNaN)) {
        console.log("Please enter a valid multiples");
        return;
    }
    if (multiples[0] == undefined || multiples[1] == undefined) {
        console.log("Please enter a valid multiples");
        return;
    }
    // words check
    if (!Array.isArray(words)) {
        console.log("Please enter 2 words in an array");
        return;
    }
    if (words[0] == undefined || words[1] == undefined) {
        console.log("Please enter 2 valid words");
        return;
    }

    console.log(
        "We will log all numbers from " +
            range[0] +
            " to " +
            range[1] +
            " if a number is a multiple of " +
            multiples[0] +
            " it will be replaced with " +
            words[0] +
            " if it is a multiple of " +
            multiples[1] +
            " it will be replaced with " +
            words[1]
    );

    for (var num = range[0]; num < range[1]; num++) {
        var output = "";
        if (num % multiples[0] === 0) {
            output += words[0];
        }
        if (num % multiples[1] === 0) {
            output += words[1];
        }
        console.log(output === "" ? num : output);
    }
}

function loopylighthouse(range, multiples, words) {
    // range check
    if (!Array.isArray(range)) {
        console.log("Please enter the range in an array");
        return;
    }
    if (range.some(isNaN)) {
        console.log("Please enter a valid range");
        return;
    }
    if (range[0] == undefined || range[1] == undefined) {
        console.log("Please enter a valid range");
        return;
    } else if (range[0] > range[1]) {
        console.log("Please enter a valid range");
        return;
    }
    // multiples check
    if (!Array.isArray(multiples)) {
        console.log("Please enter 2 multiples in an array");
        return;
    }
    if (multiples.some(isNaN)) {
        console.log("Please enter a valid multiples");
        return;
    }
    if (multiples[0] == undefined || multiples[1] == undefined) {
        console.log("Please enter a valid multiples");
        return;
    }
    // words check
    if (!Array.isArray(words)) {
        console.log("Please enter 2 words in an array");
        return;
    }
    if (words[0] == undefined || words[1] == undefined) {
        console.log("Please enter 2 valid words");
        return;
    }

    console.log(
        "We will log all numbers from " +
            range[0] +
            " to " +
            range[1] +
            " if a number is a multiple of " +
            multiples[0] +
            " it will be replaced with " +
            words[0] +
            " if it is a multiple of " +
            multiples[1] +
            " it will be replaced with " +
            words[1]
    );

    var number = range[0];
    while (number <= range[1]) {
        if (number % multiples[0] === 0 && number % multiples[1] === 0) {
            console.log(words[0] + words[1]);
            number++;
        } else if (number % multiples[0] === 0) {
            console.log(words[0]);
            number++;
        } else if (number % multiples[1] === 0) {
            console.log(words[1]);
            number++;
        } else {
            console.log(number);
            number++;
        }
    }
}

loopylighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

//TEST
console.time("ORIGINAL Function");
for (var index = 0; index < 10; index++) {
    loopylighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
}
console.timeEnd("ORIGINAL Function");

console.time("REFACTORED Function");
for (var index = 0; index < 10; index++) {
    loopylighthouse_refactor([15, 90], [2, 5], ["Batty", "Beacon"]);
}
console.timeEnd("REFACTORED Function");
