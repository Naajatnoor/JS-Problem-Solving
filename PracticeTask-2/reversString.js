//Reverse a String

// for array

// let arr=[1,2,3];

// console.log(arr.reverse())

// for string

let reverse = "";
let str ='noor';
for(let i=str.length-1;i>=0;i--){
 let letter = str[i];

 console.log('i-> ',i , letter);
reverse = reverse + letter;

}
console.log(reverse);