let firstName = 'Mohit';
console.log(firstName);

// object declaration
let person = {
    firstName: 'Mohit',
    age: 23
};

console.log(person);

// array
let colors = ['red', 'green', ' blue'];
console.log(colors);

// functions

function greet(firstName) {
    console.log('Good morning ' + firstName);
}

greet(firstName);

function square(number) {
    return number * number;
}

let value = square(3);
console.log(value);

let x = NaN;
let y = 5;
let z = x + y;

console.log(z);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push('Kiwi');
fruits.pop();
fruits.forEach((fruit) => console.log(fruit));
const points = [40, 100, 1, 5, 25, 10];
const letters = new Set(["a","b","c"]);

const personDetail = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };

  function myFunction(a, b) {
    return a * b;
  }

  let text = myFunction.toString();
  class Car {
    constructor(carName, year) {
      this.carName = carName;
      this.year = year;
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }

  let myCar = new Car("Ford", 2014);
  console.log("My car is " + myCar.age() + " years old.");
  class Car1 {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  class Model extends Car1 {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }

  let myCar1 = new Model("Ford", "Mustang");
  console.log(myCar1.show());

  const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display Result
console.log(posNumbers);
// Keep only positive numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}

function myDisplayer(value) {
  console.log(value);
}
let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);