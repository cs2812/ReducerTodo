import React, { useContext } from 'react'
import { CompleteContext } from '../context/CompleteContext'
import Todolist from './Todolist'


const Todo = () => {
    const{task}=useContext(CompleteContext)
    console.log(task)

  return (
    <div>
     {
     task.map((item,index)=>(
            <Todolist key={index} item={item}/>
        ))
        } 
      
    </div>
  )
}

export default Todo;
