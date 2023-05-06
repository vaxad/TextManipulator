import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';



function App() {
  const[mode,setMode]=useState('light');
  const[modeText,setModetext]=useState('Enable Dark Mode');
  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      setModetext('Enable Dark Mode');
    }else{
      setMode('dark');
      document.body.style.backgroundColor='black';
      setModetext('Enable Light Mode');
    }
  }

  return (
    <>
    <Navbar title="TextManipulator" other1="Home" other2="About" mode={mode} toggleMode={toggleMode} modeText={modeText} />
    <div className="container my-3">
      <Textform heading="Enter the text to analyze:" mode={mode}/>
    </div>
    
    </>
  );
}

export default App;
