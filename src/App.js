
import './App.css';
import Navbar from './component/Navbar';
import Form from './component/Form';
import { useState } from 'react';
import About from './component/About';


function App() {


  const [nowcolor, colorMode] = useState('light')

  const colorfunction = () => {
    if (nowcolor === 'light') {
      colorMode('dark')
      document.body.style.backgroundColor = '#050423'
      document.body.style.color = 'white'



    }
    else {
      colorMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    }
  }


  return (
    <>
      <Navbar title='Textutils' about='About us' nowcolor={nowcolor} colorfunction={colorfunction} />
      <Form nowcolor={nowcolor} />
      <About nowcolor={nowcolor} />
    </>
  );
}

export default App;
