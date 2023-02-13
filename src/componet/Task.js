import React from 'react'

export const Task = ({title,decscription,deleteTask,index}) => {
  return (
    <div className='task'>
     <div>
          <p> {title} </p>
          <span>{decscription}</span>
     </div>
     <button onClick={()=>{ deleteTask(index)
     }}>-</button>
    </div>
  )
}
