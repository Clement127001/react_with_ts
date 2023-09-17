import React from "react"
import Todo from "../Models/Todo";
const TodoDetails:React.FC<{todo:Todo}>=(props)=>
{
return<li >{props.todo.text}</li>
}

export default TodoDetails;