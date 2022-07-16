const prompt = require("prompt-sync")();

let number = parseInt(prompt("Enter a number: "));

switch(number) {
    case (number%10):
        console.log("The number is Unit number");
        break;
    case (number%100):
        console.log("The number is Ten number");
        break;
    case (number%1000):
        console.log("The number is Hundred number");
        break;
    case(number%10000):
    console.log("The number is Thousand number");
        break;
}
