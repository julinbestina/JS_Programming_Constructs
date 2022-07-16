const prompt = require("prompt-sync")();

let digit = parseInt(prompt("Enter a single digit number: "));

switch(digit) {
    case 0:
        console.log("The digit is Zero");
        break;
    case 1:
        console.log("The digit is One");
        break;
    case 2:
        console.log("The digit is Two");
        break;
    case 3:
        console.log("The digit is Three");
        break;
    case 4:
        console.log("The digit is Four");
        break;
    case 5:
        console.log("The digit is Five");
        break;
    case 6:
        console.log("The digit is Six");
        break;
    case 7:
        console.log("The digit is Seven");
        break;
    case 8:
        console.log("The digit is Eight");
        break;
    case 9:
        console.log("The digit is Nine");
        break;
    default:
        console.log("The digit is not a single digit number");
}



