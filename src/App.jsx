import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './page/home'
import { Route, Routes } from 'react-router-dom'
import Plant from './page/plant'
import About from './page/about'
import Contact from './page/contact'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home/> */}
      <Routes>


        
        <Route path="/" element={<Home />}/>
        <Route path="/plant" element={<Plant />} />
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App