// Without encapsulation

let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage (baseSalary, overtime, rate) {
  return baseSalary + (overtime * rate);
}

// With encapsulation (fewer parameters. easy way to write)
//group related variables and function together and this way we cand reduce complexity
//we can reuse this object in different parts of program or in different programs

let employee = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + (this.overtime * this.rate);
  }
};
employee.getWage();


// Abstraction - you can hide some of the properties and methods from outside and 
// we can get some benefits: simpler interface; reduce the impact of change
// we hide details and the complexity and show only the esentials
// this techique reduces complexity and isolates the impact of changes in the code


// Inheritance - allows you to eliminate redundant code

// Polymorphism - many forms. Allows object of different types to be treated as objects
// of a common type. Is achieved through the flexibility of its object model.
// we can refactor ugly switch/case statements

switch (Element.type) {
  case 'select': renderSelect();
  case 'text': renderTextBox();
  case 'checkbox': renderCheckBox();
  break;
}

//reduce everything to: element.render();
//Callbacks are functions that get passed as a parameter to another function.