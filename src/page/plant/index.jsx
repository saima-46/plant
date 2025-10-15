import React from 'react'
import Header from '../../component/header'
import Subheading from '../../component/subHeading.jsx'
import About from '../about/index.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import Card from '../../component/card/index.jsx';
import PlantList from '../../component/plantdummycard/index.jsx';

const Plant = () => {
  return (
    <>
      
      
      {/* <Card/> */}
      {/* card is fectching api now we creat dummy api for plant Plantlist */}
      <PlantList/>
      



    
    </>
  )
}

export default Plant