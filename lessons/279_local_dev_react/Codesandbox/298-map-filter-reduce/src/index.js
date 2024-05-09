var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// Using map with declared function

// function double(x) {
//   return x * 2;
// }
// const newMap = numbers.map(double);

// Using map with anonymous function

const newMap = numbers.map(function (x) {
  return x * 2;
});

//Using forEach with declared function for mapping

// var newMap = [];
// function double(x) {
//   newMap.push(x * 2);
// }
// numbers.forEach(double);

// Using forEach with anonymous function for mapping

// var newMap = [];
// numbers.forEach(function (x) {
//   newMap.push(x * 2);
// });

console.log(newMap);

//Filter - Create a new array by keeping the items that return true.

// Using filter

const newFilter = numbers.filter(function (num) {
  return num > 10;
});

// Using forEach to filter

// var newFilter = [];
// numbers.forEach(function (num) {
//   if (num > 10) {
//     newFilter.push(num);
//   }
// });

console.log(newFilter);

//Reduce - Accumulate a value by doing something to each item in an array.

//Using reduce

var newNumber = numbers.reduce(function (accumulator, currentNumber) {
  console.log("accumulator = " + accumulator);
  console.log("currentNumber = " + currentNumber);
  return accumulator + currentNumber;
});

//Using forEach to reduce

// var newNumber = 0;
// numbers.forEach(function (currentNumber) {
//   newNumber += currentNumber;
// });

console.log(newNumber);

//Find - find the first item that matches from an array.

const newFind = numbers.find(function (num) {
  return num > 10;
});
console.log(newFind);

//FindIndex - find the index of the first item that matches.

const newIndex = numbers.findIndex(function (num) {
  return num > 10;
});
console.log(newIndex);

//Substring

import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});
console.log(newEmojipedia);
