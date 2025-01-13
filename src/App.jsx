import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import InputFile from './component/InputFile'
import Footer from './component/Footer'


function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <InputFile />
      <Footer />
    </div>
  )
}

export default App
