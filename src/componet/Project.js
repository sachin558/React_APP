import React, { useEffect, useState } from 'react'
import { Task } from './Task';
const  Home=()=>{

  const intialArray=localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")):[]

  const [task,setTasks]=useState(intialArray); 
const [title,settitle]=useState("");
const [decscription,setdecscription]=useState("");



 const sumbithandler=(e)=>{
  e.preventDefault();
  setTasks([...task,{
    title:title,decscription:decscription}]);
    settitle("");
    setdecscription(' ');
 }


const deleteTask=(index)=>{
 const filterarr=task.filter((val,i)=>{
  return i!==index;
 });
 console.log(filterarr);
 setTasks(filterarr);
}
 useEffect(()=>{
  localStorage.setItem("task",JSON.stringify(task));
 },[task]);


  return <div className="container">
    <form  onSubmit={sumbithandler}>


      <input type="text" placeholder='Title' value={title} onChange={(e)=>settitle(e.target.value)} />


      <textarea placeholder='Description' value={decscription} onChange={(e)=>setdecscription(e.target.value)}></textarea>

      <button type='sumbit' >ADD</button>

      {task.map((item,index)=>(
        <Task key={index} title={item.title} decscription ={item.decscription} 
        deleteTask={deleteTask} index={index}        ></Task>
      ))}
    </form>
  </div>
}
export default Home; 
