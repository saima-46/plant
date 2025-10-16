import React from 'react'
import { useParams } from 'react-router-dom'
import { plantData } from '../../data/plantdata';


const SinglePage = () => {
  // const {id}=useParams();
  // const data=[...plantData];
  // const singleData=data?.find((item)=>item?.id===Number(id));
  
  return (
    <div className="container text-center my-5">
 
    
  <div className="row ">
    <div className="col-4">
        <img src={singleData?.image} alt="img" style={{width:"280px", height:"400px"}} />
    </div>
    <div className="col-8 ">
        <p style={{textAlign:'left'}}>{singleData.name}</p>
        <p style={{textAlign:'left'}}>${singleData.price}</p>
    </div>
  </div>
</div>
  )
}

export default SinglePage
