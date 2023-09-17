import React,{useContext} from "react";
import TodoDetails from "./Todo";
import classes from './Todos.module.css';
import { todoContext } from "../Store/todo-context";
//using the generic type for getting the best in the both world.
const Todos:React.FC=()=>
{

    const todoCtx=useContext(todoContext);
return<div>
    <ul className={classes.todos}>
        {todoCtx.items.map(item=><TodoDetails onClickTodo={todoCtx.removeTodo.bind(null,item.id)}  key={item.id} text={item.text}/>)}
    </ul>
</div>
}

export default Todos;