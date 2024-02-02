// Factory function

function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw');
    }
  };
}

const circle = createCircle(1);
circle.draw();


// Construtor function
// this = a reference to the object that is executing this piece of code
// ex: you have an empty new object in memory. we use this to reference that obj
// and then use . notation to set various properties to that object
//new operator = create an empty object. then it will set to "this" to point to that obj
// will return that object from 'this' function. you dont need return

function Circle(radius) {
  //console.log('this', this);
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  }
}

Circle.call({}, 1); //to call a function
// first argument: pass an empty obj and 'this' will reference this obj that we pass
// after that we pass the argument: 1. Depends how arg you have.
// when we use a new operator will internally create an empty obj and pass them
// as the first arg to the method. And this obj will determine the context for 'this'

Circle.apply({}, [1, 2, 3]); //almost the same as call
//instead of passing all the argument explicity, we pass them in an array

/*const Circle1 = new Function('radius', `
  this.radius = radius;
  this.draw = function () {
  console.log('draw');
  }
`);
const circle = new Circle1(1);
*/

const another = new Circle(1);

//Constructor property - every obj has a constructor property 

// let x = {}; // let x = new Object;
// new String(); // '', "", ``;
// new Boolean(); // true, false;
// new Number(); //1, 2, 3...

// Functions are objects


// Value vs Reference Types
// Value Types: number, string, boolean, symbol, undefined, null
// Reference Types: object, function, array 

let x = 10; //y will be 10.
let y = x;

x = 20;

let a = {value: 10};  //now the second value is also 20 because is a reference type
let b = a;

a.value = 20;
// Primitives are copied by their value.
// Object are copied by their reference.

let number = 10;

function increase(number) {
  number++; //this nr is completely independent by the let nr
}

increase(number);
console.log(number);


let obj = {value: 10};

function increasee(obj) {
  obj.value++; //we have 2 variables that point to the same obj
}

increasee(obj);
console.log(obj);


//Adding/removing properties

function Square(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const square = new Square (10);

square.location = {x: 1};
square['location'] = {x: 1}; //the same as above

const propertyName = 'center location';
square[propertyName] = {x: 1};

delete square['location'];
//delete square.location;

//Enumerating properties

for (let key in square) { //to enumerate all the members in a object
  if (typeof square[key] !== 'function')
console.log(key, square[key]);
}

const keys = Object.keys(square); //to get all the keys in a object
console.log(keys);

if ('radius' in square) //to check for the existence of a property or a method in an 
  console.log('Square has a radius.') //object


  //Abstraction: private properties and methods

  function Triangle (radius) {
    this.radius = radius;

    let defaultLocation = {x: 0, y: 0};

    //let computeOptimumLocation = function(factor) {
      //...
    //}

    this.getDefaultLocation = function() {
      return defaultLocation;
    };

    this.draw = function() {
      //computeOptimumLocation(0.1);
      // you can access defaultLocation
      //this.radius
      
      console.log('draw');
    };

    Object.defineProperty(this, 'defaultLocation', {
      get: function () {
        return defaultLocation;
      },
      set: function(value) {
        if (!value.x || !value.y)
          throw new Error('Invalid location.');
        defaultLocation = value;
      }
    });
  }

  const triangle = new Triangle;
  triangle.defaultLocation = 1;
  //triangle.draw and radius only
  triangle.draw();

  //Getters and Setters
  //getter = a function that is used to read a property
  //to set the value of this property from outside, you need a setter
  //use object.defineproperty to define a getter and/or setters
  //get and set allow you to control acces to the properties of an object.
  //they are used to get(retrieve) and set(modify) the values of obj properties in a controlled manner.


  //getter:

  const person = {
    firstName: "Daniel",
    lastName: "Dragnescu",
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  };

  //console.log(person.fullName); - Daniel Dragnescu

  //Setter:

  const person2 = {
    firstName: "Daniel",
    lastName: "Dragnescu",
    set fullName(newFullName) {
      const parts = newFullName.split("");
      this.firstName = parts[0];
      this.lastName = parts[1];
    }
  };

  person.fullName = "Jane Smith";
  //console.log(person.firstName);
  //console.log(person.lastName);