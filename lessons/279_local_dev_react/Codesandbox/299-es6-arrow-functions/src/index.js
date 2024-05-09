import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

// Standard function
function square(x) {
  return x * x;
}

let squareNumbers = numbers.map(square);
console.log(squareNumbers);

// Anonymous function
squareNumbers = numbers.map(function (x) {
  return x * x;
});
console.log(squareNumbers);

// Fat arrow function
squareNumbers = numbers.map((x) => {
  return x * x;
});
console.log(squareNumbers);

// Single property, single return
squareNumbers = numbers.map((x) => x * x);
console.log(squareNumbers);

//Map -Create a new array by doing something with each item in an array.
let newNumbers = numbers.map((x) => x * 2);
console.log(newNumbers);

// Filter - Create a new array by keeping the items that return true.
newNumbers = numbers.filter((num) => num < 10);
console.log(newNumbers);

// Reduce - Accumulate a value by doing something to each item in an array.
let newNumber = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log(newNumber);

// Find - find the first item that matches from an array.
newNumber = numbers.find((num) => num > 10);
console.log(newNumber);

// FindIndex - find the index of the first item that matches.
newNumber = numbers.findIndex((num) => num > 10);
console.log(newNumber);
