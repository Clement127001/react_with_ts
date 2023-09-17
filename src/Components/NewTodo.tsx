import {useRef,useContext} from 'react';
import classes from './NewTodo.module.css';
import { todoContext } from '../Store/todo-context';
const NewTodo:React.FC=()=>
{
    const todoCtx=useContext(todoContext);
    const todoRef=useRef<HTMLInputElement>(null);

    const submitHandler=(event:React.FormEvent)=>{

        event.preventDefault();
        const enteredTodo=todoRef.current!.value;

        if(enteredTodo.trim().length===0)
        return;

        todoCtx.addTodo(enteredTodo);

    }
    return <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor='text'>Todo Text</label>
        <input type='text' id='text' ref={todoRef}/>
        <button>Add Todo</button>
    </form>
}

export default NewTodo;