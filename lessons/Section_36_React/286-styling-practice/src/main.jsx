import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <h1>286 React Styling Practice</h1>
      <h1 className="heading" style={h1Style}>
        {greeting}
      </h1>
      {/* <p>The date and time is {{now.toDateString()}}</p> */}
    </div>
    {/* <App /> */}
  </React.StrictMode>,
)
