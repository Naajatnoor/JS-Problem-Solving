  
  console.log('===================================================');
  //Build a simple discount system: if cart total is above 1000 AND the user is a member, apply a 20% discount; if only above 1000, apply a 10% discount; otherwise, no discount — use logical operators combined with if-else if.

let cartTotal = 80;
let isMember = true;
let discount = 0; 


if (cartTotal > 1000 && isMember) {
    discount = 20; 
} 
else if (cartTotal > 1000) {
    discount = 10; 
}
else {
    console.log("No discount");
}

// 2. Print the result
console.log("Discount rate: " + discount + "%");
