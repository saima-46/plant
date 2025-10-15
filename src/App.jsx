import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './page/home'
import { Route, Routes, useLocation } from 'react-router-dom'
import Plant from './page/plant'
import About from './page/about'
import Contact from './page/contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header'
import Subheading from './component/subHeading.jsx'
import SinglePage from './component/single-page/index.jsx'


function App() {
  const [count, setCount] = useState(0);
  // header subheading not show on home page code
  const location = useLocation();
  console.log("location==>", location)
  const locationCheck = location?.pathname === "/";


  return (
    <>
   {!locationCheck  && 
   
   <Header /> } 
   {!locationCheck && <Subheading /> }
      {/* <Home/> */}
      <Routes>


        <Route path="/" element={<Home />}/>
        <Route path="/plant" element={<Plant />} />
        <Route path="/plant/:id" element={<SinglePage/>} />
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App