const prompt = require("prompt-sync")();

let year = prompt("Enter the Year: ");

if(year > 999 && year < 100000) {
    if((year % 4 == 0 && year % 100 != 0)||( year % 400 == 0))
        console.log("The year is Leap Year");
   else
        console.log("The Year is not a Leap Year");
}
else 
console.log("Enter correct Year");

