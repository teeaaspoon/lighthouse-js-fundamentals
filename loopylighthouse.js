function loopylighthouse() {
    var number = 100;
    while (number <= 200) {
        if (number % 3 === 0 && number % 4 === 0) {
            console.log("LoopyLighthouse");
            number++;
        } else if (number % 3 === 0) {
            console.log("Loopy");
            number++;
        } else if (number % 4 === 0) {
            console.log("Lighthouse");
            number++;
        } else {
            console.log(number);
            number++;
        }
    }
}

loopylighthouse();