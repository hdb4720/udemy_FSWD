import React from "react";

function Heading() {
  const date = new Date();

  let currentTime = date.getHours();
  let greeting;

  let customStyle = {
    color: "",
  };

  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Evening";
    customStyle.color = "blue";
  }

  return <h1 style={customStyle}>{greeting}</h1>;
}

export default Heading;
