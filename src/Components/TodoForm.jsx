import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {addTodo} from './Actions'

function todoForm() {
    const [text,setText]=useState("");
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
       e.preventDefault();
       if(text.trim()){
        dispatch(addTodo(text))
        setText("");
       }
    }
  return (
    <div >
        <form className='gap-5'>
            <input className="bg-white text-black p-3 rounded "type='text' placeholder='Enter a task' value={text} onChange={(e)=>setText(e.target.value)}></input>
            <button onClick={handleSubmit}>Add</button>
        </form>
    </div>
  )
}

export default todoForm