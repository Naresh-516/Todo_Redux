import React from 'react'
import TodoForm from './Components/TodoForm'
import Todos from './Components/Todos'
import './App.css' 
 
function App() {
  
  return (
    <div className='flex  flex-col justify-center items-center'>
      < TodoForm/>
      <Todos/>
    </div>
  )
}

export default App