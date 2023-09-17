import {useRef} from 'react';
import classes from './NewTodo.module.css';
const NewTodo:React.FC<{onAddTodo:(todoText:string)=>void}>=(props)=>
{

    const todoRef=useRef<HTMLInputElement>(null);

    const submitHandler=(event:React.FormEvent)=>{

        event.preventDefault();
        const enteredTodo=todoRef.current!.value;

        if(enteredTodo.trim().length===0)
        return;

        props.onAddTodo(enteredTodo);

    }
    return <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor='text'>Todo Text</label>
        <input type='text' id='text' ref={todoRef}/>
        <button>Add Todo</button>
    </form>
}

export default NewTodo;