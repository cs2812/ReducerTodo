import React, { useContext, useState } from 'react'
import { CompleteContext } from '../context/CompleteContext'
import styles from "./style.module.css"



const Todolist = ({item}) => {
    const {dispatch}=useContext(CompleteContext)
    const[done,setDone]=useState(false)
  return (
    <div  className={styles.todolist}>
      <input className={styles.check} type="checkbox" onChange={()=>setDone(!done)} />
      <span className={done?styles.strick:null} id={styles.task}>{item.task} </span>
      <button className={styles.delete} onClick={()=>{dispatch({type:"delete",paylod:item.id})}}>Delete</button>
    </div>
  )
}

export default Todolist
