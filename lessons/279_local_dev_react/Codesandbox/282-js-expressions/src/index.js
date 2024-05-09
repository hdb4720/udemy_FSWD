import React from "react";
import ReactDOM from "react-dom";

const name = "Harold";
const fName = name;
const lName = "Breeden";
const lucky_number = 55;

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <h1>Hello {fName + " " + lName}!</h1>
    <h1>Hello {fName} {lName}!</h1>
    <h1>Hello {`${fName} ${lName}`}
    <p>My lucky number is {lucky_number}</p>
    <p>A random number is {Math.floor(Math.random() * 100)}</p>
  </div>,
  document.getElementById("root")
);
