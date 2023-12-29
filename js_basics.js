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
let iso2 = now.toDateString();
console.log(iso);
console.log(iso2);

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
Array2.push(4);
console.log('eee', Array2);
Array2.unshift(0);
console.log('uy', Array2);
//encontrar el indice de un elemento
console.log(Array2.indexOf(2));
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
    let calc = Math.pow(x,2);
    return calc;

}
//console.log(calc);

let z = square(5);

console.log(z);

function var1(){
    console.log("mi function")
}

var1();

let tiempo = new Date().toISOString()
console.log(tiempo)
// bind method "this"
function f(y) {
    return this.x + y
}
// 'this' is neccesary for bind f function after
let o = {x: 1}

let g1 = f.bind(o)
console.log(g1(2))

let p1 = {x: 10, g1}
console.log(p1.g1(2))
// bind arrow functions

let sum = (x, y) => x + y
// bound arg to one value
let succ = sum.bind(null, 1)
console.log(succ(2))
//x is limited to 1, any y is passes as 2 => 3
function f(y, z) {
    return this.x + y + z
}
let g2 = f.bind({x:1}, 2)
console.log(g2(3))
// x is limited to 1, y is limited to 2 and z = 3 => 6
