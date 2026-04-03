/*
  Lesson 1: Functions - Arrow Functions
  Task: Rewrite 10 regular functions as Arrow Functions
*/
// FUNCTION 1 - SUM
let sum = function (a,b){
  return a+b;
}
let sum = (a,b) => a+b;
alert(sum(1,2));

//FUNCTION 2 - DOUBLE
let double = function (a) {
  return a * 2;
}
let double = a => a*2;
alert(double(3));

//FUNCTION 3 - SQUARE
let square = function (a) {
  return a^2;
}
let square = a => a^2;
alert(square(3));

//FUNCTION 4 - HELLO ALERT
let sayHello = function (){
  alert("Hello Rene!");
}
let sayHello = () => alert("Hello Rene!");
sayHello();

//FUNCTION 5 - IS EVEN
function isEven(a) {
  if(a % 2 == 0){
    return true;
  }
  return false;
}
let isEven = a => {
  if(a % 2 == 0){
    return true;
  }
  return false;
}
alert(isEven(2));

//FUNCTION 6 - FUNCTION RETURNING AN OBJECT
function makePerson(name, age){
  return {name: name, age: age};
}
let makePerson = (name, age) => {return {name: name, age: age}};
const person = makePerson("Rene", 27)

//FUNCTION 7 - FUNCTION USED AS A CALLBACK
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(n) {return n * 2});
const doubled = numbers.map((n)=>{return n*2});
