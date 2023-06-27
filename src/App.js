import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      {/* <Profile /> */}
      <div className='app-wrapper-content'>
        <Dialogs />
      </div>
    </div>

  );
}

export default App;
