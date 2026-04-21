/*
  Definitions:
  Objects and Arrays are two of the most used data structures in javascript
  
  Objects: a single entity that stores data items by key
  Array: gathers items into an ordered list

  Destructuring Assignment: a special syntax that allows us to unpack arrays or objects into a bunch of variables, 
  as sometimes that's more convenient.
*/

/*
  Array Destructuring:
  Here are some examples of array destructuring.
*/

// Example 1
  let arr = ["Rene", "Jay"];
  let [first, last] = arr;

// Example 2
  let [first, last] = "John Smith".split(" ");

// Example 3
  let user = {};
  [user.name, user.surname] = "John Smith".split();

// Example 4: Looping with .entries()
  let user = {
    name: "John",
    age: 30
  }
  for(let [key, value] of Object.entries(user)){
    alert(`${key}:${value}`);
  }

// Example 5: Swap variables trick
let guest = "Jane";
let admin = "Pete";
[guest, admin] = [admin, guest];
  






