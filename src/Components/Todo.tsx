import React from "react"
import Todo from "../Models/Todo";
import classes from './Todo.module.css';
const TodoDetails:React.FC<{todo:Todo,onClickTodo:(todoId:string)=>void}>=(props)=>
{


return<li className={classes.item} onClick={props.onClickTodo.bind(null,props.todo.id)} >{props.todo.text}</li>
}

export default TodoDetails;