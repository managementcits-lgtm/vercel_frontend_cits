import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Approutes from './routes/Approutes'


function App() {
  

  return (
    <>
      <Header/>
      <Approutes/>
      <Footer />
    </>
  )
}

export default App
