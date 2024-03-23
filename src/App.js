import React from 'react';
import './output.css';
import Logo from './components/Logo';
import Greetings from './components/Greetings';
import Searchbar from './components/Searchbar';



function App() {
  return (
    <div className="font-nunito">
      <div className=' bg-background h-screen'>
        <Logo />
        <Greetings />
        < Searchbar />

      </div>
  </div>
  );
}

export default App;

