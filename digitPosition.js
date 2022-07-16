const prompt = require("prompt-sync")();

let number = prompt("Enter a number: ");

if(number <  10)
console.log("The number is Unit number");
else if(number >= 10 && number < 100)
console.log("The number is Ten number");
else if(number >= 100 && number < 1000)
console.log("The number is Hundred number");
else if(number >= 1000 && number < 10000)
console.log("The number is Thousand number");
