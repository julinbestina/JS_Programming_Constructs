const prompt = require("prompt-sync")();

let day = prompt("Enter a number between 1 - 7 to display the week day: ");

if(day == 1)
console.log("The day is Sunday");
else if(day == 2)
console.log("The day is Monday");
else if(day == 3)
console.log("The day is Tuesday");
else if(day == 4)
console.log("The day is Wednesday");
else if(day == 5)
console.log("The day is Thursday");
else if(day == 6)
console.log("The day is Friday");
else if(day == 7)
console.log("The day is Saturday");
else 
console.log("Enter a correct number");