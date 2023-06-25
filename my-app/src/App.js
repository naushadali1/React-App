import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react'

let name = "Naushad Ali";
function App() {
  const [mode, setMode] = useState('light');
  const togleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#03182d';
    } else {
      setMode("light")
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="Text Utils" about="About Us" mode={mode} togleMode={togleMode} />
      <div className="container">
        <TextForm heading="Enter Text here to analyze " mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
