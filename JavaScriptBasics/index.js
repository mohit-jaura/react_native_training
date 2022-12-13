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