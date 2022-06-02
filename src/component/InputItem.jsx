import React, { useContext } from 'react'
import { CompleteContext } from '../context/CompleteContext'
import styles from "./style.module.css"


const InputItem = () => {
    const{todo,dispatch,setTodo}=useContext(CompleteContext)
  return (
    <div className={styles.inputitem}>
      
<input type="text"  onChange={(e)=>setTodo(e.target.value) } placeholder="  Enter Todo..." className={styles.input} />
<button className={styles.inputbtn} onClick={()=>dispatch({type:"add",paylod:todo,id:Math.random()})}>ADD</button>

    </div>
  )
}

export default InputItem;
