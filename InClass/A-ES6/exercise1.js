// Turn this function into an arrow function
function arrow() {
  return "es6 is awesome!";
}

let arrow1 = ()=> 'es6 is awesome!'

console.log(arrow1())

//Use the es6 syntax for default parameter
function defaultParameter(name) {
  var name = name || "sam";
  return name;
}

function defaultParameter(name = 'sam') {
  return name;
}
console.log(defaultParameter('Emilio')) 

// Use the spread operator to combine arr1 and arr2
function combineArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

function combineArrays1(arr1, arr2) {
  let conct = [...arr1,...arr2]
  return conct
}
let arr = [1, 2, 3, 4, 5];
let arr2 = [9,8]
console.log(combineArrays(arr, arr2))
console.log(combineArrays1(arr, arr2))

//use destructuring to return the object's cyf property
function destructuring(obj) {
  return obj.cyf;
}

function destructuring1(obj) {
  let {cyf} = obj;
  return cyf;
}
let daniel = {
  name: 'Daniel',
  age: 23,
  cyf: 'power'
}
console.log(destructuring1(daniel))


// use template literal to return a string with the sum of a and b
function templateString(a, b) {
  return "The sum is equal to " + (a + b).toString();
}

function templateString1(a, b) {
  return `The sum is equal to ${(a+b).toString()}`
}
console.log(templateString1(1, 2))