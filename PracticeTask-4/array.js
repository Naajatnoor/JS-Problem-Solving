// 1. Create an array with 3 items of your choice. Log it.

// 2. Log the length of the array from Task 1.

let arr=[1,2,3];
console.log('printing array with its 3 number');
console.log(arr);
console.log('length of array',arr.length);

console.log('printing 3 number of array');
for(const num of arr){
    console.log(num);
}

// 3. Log the item at index 0 and index 2 of the array.
let fruits=['apple','banana','Mango']
console.log(fruits);
console.log('fruit which is in 0 index',fruits[0]);
console.log('fruit which is in 2 index',fruits[2]);


// 4. Change the item at index 1 to a new value. Log the array.

// let fruits=['apple','banana','Mango']
console.log('changing index 1 fruits and updated array')
fruits[1]='grapes';
console.log(fruits);

// 5. Add one item to the end of the array. Log the array.

let addItem=[1,2,3];
addItem.push(4);//added item at the end
console.log(addItem);

// 6. Remove the last item from the array. Log the array and the removed value.

console.log('removing 4 from  addItem array');
addItem.pop();//remove item from the end
console.log(addItem);
console.log('removing 3 from  addItem array');
addItem.pop();
console.log(addItem);

// 7. Add one item to the start of the array. Log the array.

let num=[ 1,2,3,4,5];
num.shift(); //shift remove items from the beggining
console.log(num);

num.unshift(0,1);//unshift added items in the beggining
console.log(num);
console.log(num.includes(3));
console.log(num.includes(6));

// 10. Find the position of a specific value in the array. Log the number.

for(let i = 0;i<=num.length;i++){
    if(num[i]==2){
        console.log(i)
    }
}


const numbers = [10, 20, 30, 40, 50];
const targetValue = 30;

// 10. Find the position of a specific value in the array. we can use indexOf
const position = numbers.indexOf(targetValue);
console.log(position);

// 11. Loop through the array with a for loop and log each item.
 console.log('using for loop');
const items = ["apple", "banana", "cherry"];

for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

 console.log()
// 12. Loop through the array with a while loop and log each item.
 console.log('using while loop');
const folmul = ["apple", "banana", "cherry"];
let n=0
while(n<folmul.length){
    console.log(folmul[n]);
    n++;
}

