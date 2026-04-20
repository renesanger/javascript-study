/*
  Destructuring an object called user.
  give specific variable names values from a user object
*/

let user = {
  name: "Rene",
  years: 27
};

let {name: name, years: age, isAdmin = false} = user;
console.log(name);
console.log(age);
console.log(isAdmin);

/*
  Destructuring salaries objects,
  using destructuring in a foreach loop to iterate through a dictionary of salaries.
  return the name of the employee with the highest salary
*/

let salaries = {
  "John" : 100,
  "Pete" : 500,
  "Mary" : 300
};

function topSalary(salaries) {
  maxSalary = 0;
  maxName = null;

  for(const [name, salary] of Object.entries(salaries)){
    if(maxSalary < salary){
      maxSalary = salary;
      maxName = name;
    }
  }
  return maxName;
}

console.log(topSalary(salaries));

