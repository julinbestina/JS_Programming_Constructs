const prompt = require("prompt-sync")();

let number1 = prompt("Enter the first numbers: ");
let number2 = prompt("Enter the Second numbers: ");
let number3 = prompt("Enter the Third numbers: ");

let result1 = number1 + number2 * number3;
console.log("Result1 = "+ result1);
let result2 = number1 % number2 + number3;
console.log("Result2 = "+ result2);
let result3 = number3 + number1 / number2;
console.log("Result3 = "+ result3);
let result4 = number1 * number2 + number3;
console.log("Result4 = "+ result4);


if(result1 > result2 && result1 > result3 && result1 > result4)
console.log("Maximun= "+ result1);
else if(result2 > result3 && result2 > result4 )
console.log("Maximun= "+ result2);
else if(result3 > result4)
console.log("Maximun= "+ result3);
else 
console.log("Maximun= "+ result4);

if(result1 < result2 && result1 < result3 && result1 < result4)
console.log("Minimun= "+ result1);
else if(result2 < result3 && result2 < result4 )
console.log("Minimun= "+ result2);
else if(result3 < result4)
console.log("Minimun= "+ result3);
else 
console.log("Minimun= "+ result4);
