import React from "react";
import Login from "./Login";

var isLoggedIn = false;
// const currentTime = new Date().getHours();
const currentTime = new Date(2024, 5, 4, 9).getHours();

// function renderConditionally() {
//   if (isLoggedIn === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

// function App() {
//   return <div className="container">{renderConditionally()}</div>;
// }

function App() {
  return (
    // <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
    <div className="container">
      {/* {currentTime > 18 ? <h1>Why are you still working?</h1> : null} */}
      {currentTime > 18 && <h1>Why are you still working?</h1>}
    </div>
  );
}

export default App;
