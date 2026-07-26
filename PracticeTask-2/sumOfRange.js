// without function
let number =7;
let sum =0;
for(let i =1;i<=number;i++){
sum=sum+i;
}
console.log('sum= ',sum);


// with function

function range(){
let number =7;
let sum =0;
for(let i =1;i<=number;i++){
sum=sum+i;
}
// console.log('sum= ',sum);
return sum;
}
console.log('sum= ', range());
