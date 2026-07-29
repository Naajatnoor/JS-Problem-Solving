// Task 14 — Mini Challenge 
// Write a program that:
// Loops from 1 to 100.
// Skips (continue) any number divisible by 5.
// Stops (break) completely once it reaches a number greater than 40.
// Prints every number that passes both checks.

console.log('numbers which passes both checks =');
for(let i=1;i<=100;i++){
   if(i>40){
        // console.log('Break when i = ',i);
        break;
    }
     else  if(i%5==0){
        // console.log('continue when i = ',i);
        continue;
    }
     
    console.log(i);

}

console.log();
console.log('------------------------------------------------');
console.log();


console.log("Numbers stopped and continue by checks")

for(let i=1;i<=100;i++){
    if(i%5==0){
        console.log('continue when i = ',i);
        continue;
    }
    else if(i>40){
        console.log('Break when i = ',i);
        break;
    }
}