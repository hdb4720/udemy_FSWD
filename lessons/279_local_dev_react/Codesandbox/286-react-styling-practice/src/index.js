//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

let greeting = "";
let h1Style = {
  color: "",
};

let now = new Date();
let hour = now.getHours();

if (hour > 0 && hour < 12) {
  greeting = "Good Morning";
  h1Style.color = "red";
} else if (hour >= 12 && hour < 18) {
  greeting = "Good Afternoon";
  h1Style.color = "green";
} else if (hour >= 18 && hour < 24) {
  greeting = "Good Evening";
  h1Style.color = "blue";
} else {
  greeting = "";
  h1Style.color = "";
}

ReactDOM.render(
  <div>
    <h1>286 React Styling Practice</h1>
    <h1 className="heading" style={h1Style}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
