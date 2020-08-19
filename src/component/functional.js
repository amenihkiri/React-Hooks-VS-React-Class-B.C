 import React,{useState} from 'react'
 
  export default function Add() {

   const [count, setCount] = useState(1000);
     return (
         <div style={{backgroundColor:"lightpink", width:"50%" ,textAlign:"center"}}>
             <h1>React Functional Component </h1>
            
             <button onClick={() => setCount(count - 1)}>-</button>
            <h1>{count} </h1> 
            <button onClick={() => setCount(count +  1)}>+</button>
        
         </div>
     )
 }
  
 