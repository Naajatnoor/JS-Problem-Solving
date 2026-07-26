//problem 4: fizzbuzz(1-n)
//loop through number from 1 - n.if a number is divisible by 3,print fizz if divisible by 5 print buzz;if divisible by both print fizzbuzz other print the number itself

function fizzbuzz(number){

    if(number%3==0 && number%5==0){
        console.log('fizzbuzz');
    }

    else if (number%3==0){
         
        console.log('fizz');
  
    }

      else if (number%5==0){

         
        console.log('buzz');
  
    }
    else{
        console.log(number);
    }


  
}

fizzbuzz(9);
fizzbuzz(25);
fizzbuzz(15);
fizzbuzz(2);
