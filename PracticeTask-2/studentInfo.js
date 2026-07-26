const student={
    name:'noor',
    age:22,
    university:'LU',
    depertment:'CSE',
};

function objOperation(obj){
for(let key in obj){
    console.log(key);
}
for(let key in obj){
    console.log(obj[key]);
}
console.log();
for(let key in obj){
    console.log(key,": " ,obj[key]);

}
 let objKeyCount=Object.keys(obj).length;
    console.log("Total Properties: ",objKeyCount);

    let hasEmailProperty = obj.hasOwnProperty("email");
    console.log("Has Email: ",hasEmailProperty);
}


 objOperation(student);