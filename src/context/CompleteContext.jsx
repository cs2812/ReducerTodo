import { createContext, useReducer, useState } from "react";

export const CompleteContext =createContext();

export const CompleteContextProvider=({children})=>{
    let reducer=(task,action)=>{
        switch(action.type){
            case "add":{
                console.log(task)
                return(
                    [...task,{task:action.paylod,id:action.id}]
                )
            }
            case "delete":{
                return(
                    task.filter((item)=>item.id!==action.paylod)
                )
            }
            default:{
                return task;
            }
        }

    }

    const[task,dispatch]=useReducer(reducer,[])
    const[todo,setTodo]=useState("")

return <CompleteContext.Provider value={{task,dispatch,reducer,todo,setTodo}} >
        {children}</CompleteContext.Provider>
}