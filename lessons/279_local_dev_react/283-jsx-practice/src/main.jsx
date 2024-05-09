import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

const name = "Harold Breeden"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <h1>283 JSX Practice</h1>
      <p>Created by {name}</p>
      <p>Copyright {new Date().getFullYear()}</p>
    </div>
    {/* <App /> */}
  </React.StrictMode>,
)
