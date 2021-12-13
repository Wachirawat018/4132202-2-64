const cars = ["Toyota","Honda","Mazda"];
const fruits = [];
fruits[0] = "Apple";
fruits[3] = "Mango";
const rname = new Array("win","John","James");
console.log(fruits);

const carPop = cars.pop();
console.log(carPop);
console.log(cars);

cars.push("Kubota");
console.log(cars);

const carshift = cars.shift();
console.log (carshift);
console.log (cars);

cars.unshift("Mazda");
console.log(cars);

const slideArr = cars.shift(0, 2);
console.log(slideArr);

const conCatArr = cars.concat(rname);
console.log(conCatArr.toString());

//spread operator
const catArr = [...cars, ...rname];
console.log(catArr);

//iteration
const keys = cars.keys();
let text = "";
for(x of keys){
    text += x;
}
console.log(text);

const brand = cars.forEach(cat);
function cat(value, index, array) {
    text += value;
}
console.log(text);

cars.map(addVal)
function addVal  (value) {
    return value + "<br>";
}

const numbers = [10,20,30];
const over10 = numbers.filter(over10fn)
function over10fn(value){
    return value > 10;
}
console.log(over10);

let sum = numbers.reduce(addFu);
function addFu(total, value){
    return total + value;
}
console.log(sum);

let boolover10 = numbers.every(over10fn);
console.log(boolover10);
boolover10 = numbers.some(over10fn);
console.log(boolover10);

let first = numbers.find(over10fn);
console.log(first);
let firstKey = numbers.findIndex(over10fn);
console.log(firstKey);

const alphabet = Array.from("ABCDEF");
console.log(alphabet);