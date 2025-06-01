import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[{
        id: 1,
        txtMsg:"todo 1",
        completed:false
    }],
    addTodo: (todo)=>{},
    updateTodo: (todo, id)=>{},
    removeTodo: (id)=>{},
    toggleComplete: (id)=>{}
})

export const TodoProvider = TodoContext.Provider

export function useTodo(){
    return useContext(TodoContext)
}