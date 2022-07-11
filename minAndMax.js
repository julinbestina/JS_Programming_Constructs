let max = 100;
let min = 999;

for (let i = 1; i <= 5; i++) {
    let num = Math.floor(Math.random() * 900) + 100;
    console.log("Number" + i + " = " + num);
    
    if(num > max) 
        max = num;

    if(num < min) 
        min = num;
    
}

console.log("Maximum number = " + max);
console.log("Minimum number = " + min);