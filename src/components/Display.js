import React,{useContext} from 'react'
import {Store} from '../App'
import { useState } from 'react';
const Display = () => {
    const [data,setData] = useContext(Store);
    const [name,setName]=useState('');
    const submitHandler=e=>{
      e.preventDefault();
      setData([...data,{name:name}])
    }
  return (
    
    <div className='card'>
        <div className='card-body'>
         <ul>
            {data.map((item,index)=>(
                <li key={index}>{item.name}</li>
            ))}
         </ul>
         <form onSubmit={submitHandler}>
          <input type='text' onChange={(e)=>setName(e.target.value)}  placeholder='enter name'></input>
          <input type='submit'></input>
         </form>
        </div>
    </div>
  )
}

export default Display

