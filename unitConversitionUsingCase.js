const prompt = require("prompt-sync")();

console.log("Unit Conversion Program");
console.log("1.Feet to Inch 2. Inch to Feet  3.Feet to Meter  4.Meter to Feet");
let userChoice = parseInt(prompt("Enter your choice : "));
let number = prompt("Enter the number : ");
let result;

switch(userChoice) {
    case 1:
        result = number * 12;
        console.log(number + " feet =" + result + " inche");
        break;
    case 2:
        result = number / 12;
        console.log(number + " inch =" + result + " feet");
        break;
    case 3:
        result = number / 3.28;
        console.log(number + " feet =" + result + " meter");
        break;
    case 4:
        result = number * 3.28;
        console.log(number + " meter =" + result + " feet");
        break;
    default:
        console.log("Select correct option");

}