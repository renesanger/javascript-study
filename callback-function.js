/* 
What is a callback?
A callback is a function that is intended to passed down as an argument to another function. They are comonly used in Asynchronous functions
*/

//EXAMPLE OF A CALLBACK FUNCTION

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayGoodbye(){
  console.log("Goodbye!");
}

greet("Rene", sayGoodbye);

//Callbacks are commonly used in asynnchronous functions

setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);

// Arrow functions make your code look cleaner
setTimeout(() => {
  console.log("This runs after 2 seconds")
  }, 2000);

/*
  Instead of your code waiting for your function to run, you hand off a callback function and say run this when you are done
*/


