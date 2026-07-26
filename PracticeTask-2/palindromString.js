// a string is palindrom or Not
//without fucntion
let str ='madam';
let reverseString="";

for(let i=str.length-1; i>=0;i--){
let letter=str[i];

reverseString =  reverseString + letter;
}
console.log(reverseString);


if(str === reverseString){
    console.log('string is palindrom');
}
else{
    console.log('string is not palindrom');
}


//with function


function isPalindrom(str){
    let reverseString="";

for(let i=str.length-1; i>=0;i--){
let letter=str[i];

reverseString =  reverseString + letter;
}
console.log(reverseString);

if(str === reverseString)
{
    return true;
}
else{
    return false;
}
}

console.log(isPalindrom('noor'))