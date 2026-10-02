import React from 'react'
import Todoitems from "../MyComponents/Todoitems";

export default function Todos(props) {

  return (
    <div className ="container" >
      <h3 className=" my-3">Todos List</h3>
      {props.todos.length===0? "No Todos to display":
      props.todos.map((todo)=>{
        return <Todoitems todo = {todo} key={todo.sno} onDelete={props.onDelete} />
      })}
    </div>
  )
}
