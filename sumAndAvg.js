let sum = 0;

for(let i = 1; i <= 5; i++) {
    let number = Math.floor(Math.random() * 90) + 10;  
    console.log("Number"+i+"="+ number);
    sum += number;
}

let avg = sum / 5;
console.log("Sum of 5 two digit values = " + sum);
console.log("Average = " + avg);
