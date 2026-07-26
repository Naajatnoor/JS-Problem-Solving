//smallest number in an array

let arr=[1 ,4, 3, 0, 2 ,67, 9]
smallest=arr[0];

for(const num of arr){
// console.log(num);
if(smallest > num)
{
    smallest=num;
}
}
console.log(smallest);


function smallestNum(){
let arr=[500,4, 3, 6, 2 ,67, 9]
smallest=arr[0];

for(let i=1; i <arr.length;i++){
// console.log(num);
if(smallest>arr[i])
{
    smallest=arr[i];
}
}
console.log(smallest);

}
smallestNum();