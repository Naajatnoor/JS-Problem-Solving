// return all even Numbers, then their sum


// let arr=[1,4, 3, 6, 2 ,67, 9]
// largest=arr[0];
// let even=[];
// let sum =0;
// for(let i=0; i <arr.length;i++){
// if(i%2===0){
//     // console.log("even number ",arr[i]);
//     even.push(arr[i]);
// }


// }
// console.log('evenNumber ',even);
// for(const num of even){
//     sum=sum+num;
// }
// console.log('sum ',sum);
let arr=[1,4, 3, 6, 2 ,67, 9]

function evenNum(arr){
let evenNumber =[];
for(let i=0; i <arr.length;i++){
if(i%2===0){
  evenNumber.push(arr[i]);

}

}
return evenNumber
}

function getSum(arr){
    let sum =0;
    for(const num of arr){
    sum=sum+num;
}
return sum;
}

let even_numbers=evenNum(arr)
let summ =getSum(even_numbers);
console.log("sum: -> ", summ);
