// Task 1 — Print "Hello" Five Times
// Write a for loop that prints "Hello" 5 times
for(let i =1;i<=5;i++){
    console.log('Hello');
}


// Task 2 — Print Numbers 1 to 10 
// Write a for loop that prints numbers from 1 to 10.
for(let i =1;i<=10;i++){
    console.log(i);
}

console.log();

// Task 3 — Countdown with While Loop 
// Write a while loop that prints numbers from 10 down to 1.

for(let i =10;i>=0;i--){
    console.log(i);
}

// Task 4 — Repeat a Message 
// Using a while loop, print "Loop চলছে" exactly 7 times.

for(let i =1;i<=7;i++){
    console.log('loop cholche');
}


console.log();

let j=1;
while(j<=7){
    console.log('Loop চলছে');
    j++;
}


// Task 5 — Even Numbers 
// Write a for loop that prints all even numbers between 1 and 30.

for(let i =1;i<=30;i++){
    if(i%2==0){
  console.log('Even',i);
    }
  
}

// Task 6 — Sum of Numbers 
// Write a for loop that calculates the sum of numbers from 1 to 20 and prints the result.

let sum1=0;
for(let i =1;i<=20;i++){
  
    sum1=sum1+i;
}
console.log();
 console.log('Sum',sum1);
 console.log();

//  Task 7 — Multiplication Table 
// Ask the user for a number (or set a variable), then print its multiplication table from 1 to 10 using a for loop. Example: if the number is 7 → 7 x 1 = 7, 7 x 2 = 14, ... 7 x 10 = 70.
console.log('Multiplication Table');

let number = 7;
for(let i =1;i<=10;i++){
    let mult = i*7;
    if(number == 7)
   console.log('7 X',i,'=',mult);
}
console.log();


// Task 8 — Count Down from 20 
// Write a for loop that counts down from 20 to 1.
let count=0;
for(let i=20-1;i>=0;i--){
    count++;
    console.log('count =', i );
}

console.log();

// Task 9 — Sum of Even Numbers
// Write a for loop that calculates the sum of all even numbers from 2 to 50.

let sum2=0;
for(let i =2;i<=50;i++){
  
    sum2=sum2+i;
}
console.log();
 console.log('Sum',sum2);
 console.log();

//  Task 10 — Using Break 
// Write a for loop from 1 to 50 that stops completely (break) as soon as it reaches a number greater than 30.

for(let i =1;i<=50;i++){
    console.log(i);
if(i>30)

break;
}

console.log();

// Task 11 — Using Continue 
// Write a for loop from 1 to 20 that skips (continue) any number divisible by 4.

for(let i =1;i<=20;i++){
    // console.log(i);
if(i%2==0)

continue;
console.log(i);

}

console.log();

// Task 12 — Do While Loop — Optional 
// // Write a do while loop that prints numbers from 1 to 5. Then modify the condition so it is false from the start (for example, i > 10) and observe that the loop still runs once.
let m = 1;

do {
  console.log(m);
  m++;
} while (m <= 5);

// Write a do while loop that prints numbers from 1 to 5. Then modify the condition so it is false from the start (for example, i > 10) and observe that the loop still runs once

let k = 1;

do {
  console.log('Loop executed once! k is:');
  k++;
} while (k > 10);


// Task 13 — Comparing Loop Types
// Write the same task — printing numbers 1 to 5 — three times: once using for, once using while, and once using do while. Compare how the code structure differs for each.
console.log('---------------------');
console.log('using for loop');

for(let i =1;i<=5;i++){
console.log(i);
}

console.log('---------------------');
console.log('using while loop');

let I=1;
while(I<=5){
    console.log(I);
    I++;
}


console.log('---------------------');
console.log('using do while loop');

let J=1;

do{
     console.log(J);
       J++;
}
while(J<=5);
   
 