import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import pi, {doublePi, triplePi} from "./math.js"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ul>
      <li>{pi}</li>
      <li>{doublePi()}</li>
      <li>{triplePi()}</li>
    </ul>
    {/* <App /> */}
  </React.StrictMode>,
)
