var temperature = 41;
var raining = false;

if (temperature < 0) {
    console.log("Make sure to pick out a scarf");
} else if (temperature < 15) {
    console.log("Short sleeves won't cut it");
} else {
    console.log("Short sleeves are fine");
}

if (temperature < -40 || temperature > 40) {
    console.log("Maybe going outside isn't a great idea");
}

if (!raining) {
    console.log("Leave your umbrella at home");
}
