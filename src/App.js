import About from "./Components/About";
import { useState } from "react";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import {Routes, Route } from "react-router-dom";


function App() {
  const[mode,setMode]=useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const enableMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.background='rgb(14 58 102)'
      showAlert('Dark Mode Enabled','success')
      document.title='Dark Mode'
    }
    else if(mode==='success'){
      setMode('dark')
      document.body.style.background='rgb(14 58 102)'
      showAlert('Dark Mode Enabled','success')
    }
    
    else{
      setMode('light')  
      document.body.style.background='white'
      showAlert('Light Mode Enabled','success')
    }
  }
  const enableGreenMode=()=>{
    if(mode==='light'){
      setMode('success')
      document.body.style.background='#093a14'
      showAlert('Green-Dark Mode Enabled','success')
    }
    else if(mode==='dark'){
      setMode('success')
      document.body.style.background='#093a14'
      showAlert('Green-Dark Mode Enabled','success')
    }
    else{ 
      setMode('light')  
      document.body.style.background='white'
      showAlert('Light Mode Enabled','success')
    }
  }
  return (
    <>
<Navbar title='My Project' about="About" mode={mode} enableMode={enableMode} enableGreenMode={enableGreenMode} />
<Alert alert={alert} />
  <Routes>
    <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} />}></Route>
    <Route exact path="/about" element={<About/>}></Route>
  </Routes>
    </>
  );
}

export default App;
