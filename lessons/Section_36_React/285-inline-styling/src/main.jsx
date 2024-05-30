import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

const customStyle = {
    color: "red",
    fontSize: "20px",
    border: "1px solid black"
}

customStyle.color = "blue";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <h1>285 Inline Styling of React Elements</h1>
      <h1 style={customStyle}>Hello World!</h1>
    </div>
    {/* <App /> */}
  </React.StrictMode>,
)
