// Data and times
// current time as a number
let time = Date.now();
console.log(time);
// current time as an object
let now = new Date();
// millisecond
let ms = now.getTime();
console.log(ms);
// iso format
let iso = now.toISOString();
console.log(iso);

// strings
let msg = "hello, world"
// size
console.log(msg.length);
// slice
// method 1
let m = msg.substring(1,4);
console.log(m);
// method 2
console.log(msg.slice(1,4));
//split
let g = msg.split(", ")
console.log(m);
// null : absence of value
// undefined: not return value
// differents names
const a = 1;
// let x = 2;
let b = 4;
// let y = 5;
// destructuring assignements - programacion de asignacio desestructurada 
let [x,y] = [1, 2];
[x,y] = [x+1, y+1];
[x,y] = [y, x]
console.log([x,y]);
// three dots operator
let [c, ...d] = [1, 2, 3, 4, 5]
console.log(d);
// Arrays
let myArray = [];
let Array2 = [1, 2, 3];
// objects
let p = {x: 2.3, y: 4.5}; // An object with 2 propierties
let q = {};
// propierties asignations
q.x = 4, q.y = 5;
console.log(q);
console.log(q.x);
// object nested
let rectangle = {
    upperleft : {x:2, y:2},
    lowerRight: {x:4, y:5}
};
// propierties access
console.log(rectangle.upperleft.x);
console.log(rectangle["upperleft"])

// functions
let square = function(x) {
    return Math.pow(x,2)
}
let z = square(5);
console.log(z);
