//filter numbers greater than a value

let arr=[10,20,30,40,50,60,70,80,90,100];

let value=45;

let filterArray=[];

for(let i=0; i <arr.length;i++){
// console.log(num);
if(value<arr[i])
{
    filterArray.push(arr[i]);

}
}
console.log(filterArray);





function getFilterArray(){

    let filterArray=[];

for(let i=0; i <arr.length;i++){
// console.log(num);
if(value<arr[i])
{
    filterArray.push(arr[i]);

}
}
console.log(filterArray);
}

 getFilterArray();