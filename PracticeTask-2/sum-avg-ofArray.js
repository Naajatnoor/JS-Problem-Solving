//sum and average og an array

let arr=[1,4, 3, 6, 2 ,67, 9]
largest=arr[0];
let sum =0;
let avg;
for(let i=0; i <arr.length;i++){
sum=sum +arr[i];
avg = sum/arr.length;
}

console.log(sum);
console.log(avg);