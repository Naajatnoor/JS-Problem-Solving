//largest number

// let arr=[1,4, 3, 6, 2 ,67, 9]
// largest=arr[0];

// for(let i=0; i <arr.length;i++){
// // console.log(num);
// if(largest<arr[i])
// {
//     largest=arr[i];
// }
// }
// console.log(largest);

let arr=[1 ,4, 3, 6, 2 ,67, 9]
largest=arr[0];

for(const num of arr){
// console.log(num);
if(largest<num)
{
    largest=num;
}
}
console.log(largest);


function largestNum(){
let arr=[500,4, 3, 6, 2 ,67, 9]
largest=arr[0];

for(let i=1; i <arr.length;i++){
// console.log(num);
if(largest<arr[i])
{
    largest=arr[i];
}
}
console.log(largest);

}
largestNum();
