const prompt = require("prompt-sync")();
 
let month = prompt("Enter the Month: ");
let day = prompt("Enter the Day: ");
if(month > 3 && month < 6)
console.log("True");
if((month == 3 && day > 20) ||(month == 5 && day < 20))
console.log("True");
else
console.log("False");
