import React from 'react';
import Contacts from './Contacts';
import './App.css';
import Avatar from './Avatar';

function App() {
  return (
    <div>
      <h1 className='heading'>My Contacts</h1>
      <Avatar img='../src/assets/IMG_2257.jpg' />
      <Contacts />
    </div>
  )
}

export default App;
