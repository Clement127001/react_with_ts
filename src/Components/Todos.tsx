import React from "react";
const Todos:React.FC<{items:string[],children:any}>=(props)=>
{
return<div>
    <ul>
        {props.items.map(item=><li key={item}>{item}</li>)}
        {props.children}
    </ul>
</div>
}

export default Todos;