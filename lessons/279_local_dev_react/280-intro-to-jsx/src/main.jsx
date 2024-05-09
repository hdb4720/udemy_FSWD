import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <h1>My React App</h1>
      <p>with a paragraph too</p>
    </div>
    {/* <App /> */}
  </React.StrictMode>,
)
