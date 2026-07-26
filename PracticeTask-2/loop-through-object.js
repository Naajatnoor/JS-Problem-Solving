// Loop through an object's properties

let monitor = {
    color: "black",
    brand: "LC",
    display: "something",
    size: "something"
};

console.log(monitor);
console.log(monitor["color"]);
console.log(monitor.brand);

// Method 1: for...in loop
for (let key in monitor) {
    console.log(key, ":", monitor[key]);
}

  console.log();
// Method 2: Object.keys()
let objkeys = Object.keys(monitor);

for (let i = 0; i < objkeys.length; i++) {
    let key = objkeys[i];
    console.log(key, ":", monitor[key]);
}