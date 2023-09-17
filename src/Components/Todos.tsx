import React from "react";
import Todo from "../Models/Todo";
import TodoDetails from "./Todo";
//using the generic type for getting the best in the both world.
const Todos:React.FC<{items:Todo[],children:any}>=(props)=>
{
return<div>
    <ul>
        {props.items.map(item=><TodoDetails todo={item}/>)}
        {props.children}
    </ul>
</div>
}

export default Todos;