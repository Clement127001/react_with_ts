import React from "react";
import Todo from "../Models/Todo";
import TodoDetails from "./Todo";
import classes from './Todos.module.css';
//using the generic type for getting the best in the both world.
const Todos:React.FC<{items:Todo[],onDeleteTodo:(todoId:string)=>void}>=(props)=>
{
return<div>
    <ul className={classes.todos}>
        {props.items.map(item=><TodoDetails onClickTodo={props.onDeleteTodo} key={item.id} todo={item}/>)}
    </ul>
</div>
}

export default Todos;