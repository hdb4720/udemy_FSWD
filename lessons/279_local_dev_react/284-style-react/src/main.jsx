import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

const img = "https://picsum.photos/200";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <h1 className="heading">284 JSX Syling</h1>
      <div>
        <h1 className="heading">Some Of My Favourite Foods</h1>
        <img
          className="food-img"
          src="https://th.bing.com/th?id=OIP.45Yaz_MMugeoyhhB1rpDcwHaJ0&w=217&h=287&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          alt="Bacon"
          height="100"
          width="100"
        />
        <img
          className="food-img"
          src="https://th.bing.com/th?id=OIP.da8YUBx6otW8eOpUbIK4wwHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          alt="Sausage"
          height="100"
          width="100"
        />
        <img
          className="food-img"
          src="https://i.pinimg.com/originals/66/9a/1a/669a1ab3c47aa5340b611590c5cbbb9f.jpg"
          alt="Eggs"
          height="100"
          width="100"
        />
      </div>

      <div>
        <h1 className="heading">Random Photos</h1>
        <img src={img}/>
      </div>
    </div>,
    {/* <App /> */}
  </React.StrictMode>,
)
