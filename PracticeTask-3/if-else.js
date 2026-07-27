// Take a speed variable. If speed is greater than 80, print "Overspeeding", otherwise print "Normal speed".

let speed =89;

   if(speed > 80){
        console.log("Overspeeding");
    }
    else{
       console.log("Normal speed"); 
    }

    
console.log('===================================================');

//Using age and hasTicket, print "Entry allowed" if age is above 18 AND the person has a ticket (use &&).

let age = 19;

let hasTicket=true;
 if(age >18 && hasTicket){
        console.log("Entry allowed");
    }
    else{
       console.log("Entry not allowed"); 
    }

console.log('===================================================');

//Using isWeekend and isHoliday, print "No work today" if either one is true (use ||).


    let isWeekend = true;
let holiday= false;

if( isWeekend || holiday ){
        console.log( "No work today");
    }
    else{
       console.log("Get ready for work"); 
    }


console.log('===================================================');

//Build a simple login system — print "Login successful" only if both username and password are correct.

const username='najatnoor';

const password='noor';
if( username == 'najatnoor' &&  password == 'noor' ){
        console.log("Login successful");
    }
    else{
       console.log("incorrect"); 
    }


 
console.log('===================================================');

//Build a grading system using a marks variable (A+, A, B, C, F) — it must have at least 5 condition branches.

let marks =7 ;

if(marks >= 80){
    console.log("A+")
}

else if(marks >= 75 && marks < 80){
    console.log("A")
}

else if(marks >= 70 && marks < 75){
    console.log("A-")
}
else if(marks >= 65 && marks < 70){
    console.log("B")
}
else if(marks >= 60 && marks < 65){
    console.log("B-")
}

else if(marks >= 50 && marks < 60){
    console.log("c")
}

else if(marks >= 0 && marks < 50){
    console.log("F")
}

else{
    console.log("undefined")
}


console.log('===================================================');

//Using a bmi variable, determine the category — Underweight, Normal, Overweight, Obese (use if-else if).

        let BMI= 56;


        if(BMI > 18.5 ){
        console.log("Underweight")
        }


        else if(BMI >= 18.5 && BMI < 24.9 ){
        console.log("Healthy Weight")
        }

        else if(BMI >= 25 && BMI < 29.9 ){
        console.log("Overweight")
        }


        else{
        console.log("Obesity")
        }


console.log('===================================================');

//Using a month number (1-12), determine which season that month falls in (Winter, Summer, Monsoon, etc.).


// Change this number (1 to 12) to test different months
let monthNumber = 9; 

if (monthNumber >= 9 && monthNumber <= 11) {
    console.log("Autumn / Fall");
} else if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
    console.log("Winter");
} else if (monthNumber >= 3 && monthNumber <= 5) {
    console.log("Spring");
} else if (monthNumber >= 6 && monthNumber <= 8) {
    console.log("Summer");
} else {
    console.log("Invalid month number. Please use 1-12.");
}


console.log('===================================================');
//Using age and hasID, use nested if-else to check whether someone is eligible to vote.

let Age = 35;
let hasId= true;

if(Age > 18){

    if(hasId){
        console.log("Eligible to vote")
    }

    else{
         console.log("Go,get ready you Id card,")
    }

}

console.log('===================================================');

 //Determine whether a number is even or odd using the ternary operator.

 let num=5;
 let evOd = num % 2 == 0 ? "even" : "odd" ;
 console.log(evOd);
 

 console.log('===================================================');

 //Using age, determine "Adult" or "Minor" using the ternary operator.
 let agee=5;
 let person = agee >= 18 ? "adult" : "minor" ;
 console.log(person);
 console.log('===================================================');

// If the price is greater than 1000, print "Expensive", otherwise "Affordable" — write this using a ternary operator.
let price=1040;

if(price > 1000){
    console.log("expensive")
}

else{
    console.log("affordable");
}

 console.log('===================================================');

//Using hasPermission, use the ! operator to print "Access Denied" if permission is not granted.
const hasPermission = false;

if(!hasPermission){
    console.log("access denied")
}

else{
    console.log("welcome");
}

 console.log('===================================================');
 //Using isOnline, use the NOT operator to print "User is offline".
 let  isOnline = true;
 if(!isOnline){
    console.log("user is online")
 }
 else{
    console.log("user is offline")
 }


 console.log('===================================================');
 //Using isLoggedIn and isAdmin, build a nested condition — if logged in and admin, print "Admin Dashboard"; if logged in but not admin, print "User Dashboard"; if not logged in, print "Please Login".

let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
    // This is the nested condition inside the logged-in block
    if (isAdmin) {
        console.log("Admin Dashboard");
    } else {
        console.log("User Dashboard");
    }
} else {
    // This runs if isLoggedIn is false
    console.log("Please Login");
}


 
