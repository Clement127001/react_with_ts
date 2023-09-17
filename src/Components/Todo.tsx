import React from "react"
import classes from './Todo.module.css';
const TodoDetails:React.FC<{text:string,onClickTodo:()=>void}>=(props)=>
{
return<li className={classes.item} onClick={props.onClickTodo} >{props.text}</li>
}

export default TodoDetails;