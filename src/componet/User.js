import React from 'react'
import {useParams,Navigate, useNavigate} from "react-router-dom"


function  User() {
     const   param=useParams();
     const navigation=useNavigate();
     console.log(param.id);
  return (
    <div className='sachin'>
    <button onClick={()=>navigation("/about")}> Click Me</button>
    </div>
  )
}

export default  User