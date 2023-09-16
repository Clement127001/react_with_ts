import React from "react";
import Todo from "../Models/Todo";
const Todos:React.FC<{items:Todo[],children:any}>=(props)=>
{
return<div>
    <ul>
        {props.items.map(item=><li key={item.id}>{item.text}</li>)}
        {props.children}
    </ul>
</div>
}

export default Todos;