// Take a year variable and check whether it is a leap year (hint: year % 4 === 0).


let year = 2026;
    if(year%400==0 ||(year % 4==0 && year % 100 !=0)){
        console.log("Leap Year");
    }

    else{
       console.log("Not Leap Year"); 
    }