import React from "react"
import Todo from "../Models/Todo";
import classes from './Todo.module.css';
const TodoDetails:React.FC<{todo:Todo}>=(props)=>
{
return<li className={classes.item} >{props.todo.text}</li>
}

export default TodoDetails;