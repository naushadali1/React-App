import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const togleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#03182d';
      showAlert("Dark Mode has been succesfuly enabled", "success");
    } else {
      setMode("light")
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been succefuly enabled", "success");

    }
  }
  return (<div>

    {/* <Router> */}
    <Navbar title="Text Utils" about="About Us" mode={mode} togleMode={togleMode} />
    <div className="container">
      <Alert alert={alert} />
      {/* <Routes> */}
      {/* <Route path="/about" element={<About />} /> */}

      {/* <Route path="/" element={<TextForm heading="Enter Text here to analyze " mode={mode} showAlert={showAlert} />} /> */}
      <TextForm heading="Enter Text here to analyze " mode={mode} showAlert={showAlert} />


      {/* </Routes> */}

    </div>
  </div>
    // </Router>
  )
}

export default App;
