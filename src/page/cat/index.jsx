import React from 'react'
import { plantData } from '../../data/plantdata'

const categories = () => {
    const data=[...plantData]
    const getAir =data.filter((item)=>item?.category==="Air purifying")
    const getAir =data.filter((item)=>item?.category==="Air purifying")
  return (
    <div className>
      
    </div>
  )
}

export default categories
