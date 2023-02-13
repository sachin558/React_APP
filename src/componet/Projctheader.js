import React from 'react'
import {Link} from "react-router-dom"
export default function Projctheader() {
  return  <>
   <nav>Get Ready to  follow the daily Goals </nav>
   <div className='header1'>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/user/:id">user</Link>
   </div>
          
     
  </>
  }
