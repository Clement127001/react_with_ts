import React,{useState} from "react";
import Todo from "../Models/Todo";


type todoObj={
    items:Todo[],
    addTodo:(todo:string)=>void,
    removeTodo:(todoId:string)=>void,
}
export const todoContext=React.createContext<todoObj>(
    {
        items:[],
        addTodo:(todo:string)=>{},
        removeTodo:(todoId:string)=>{},
    }
);

const TodocontextProvider:React.FC<{children:any}>=(props)=>
{
     const [todos,setTodos]=useState<Todo[]>([]);

  const onAddTodoHandler=(todoText:string)=>
  {
   
    const newTodo=new Todo(todoText);
    setTodos(prevTodos=>prevTodos.concat(newTodo));
  }

  const deleteTodoHandler=(todoId:string)=>
  {
    const updatedTodo=todos.filter(item=>item.id!==todoId);

    setTodos(updatedTodo);
  }

  const values:todoObj=
  {
    items:todos,
    addTodo:onAddTodoHandler,
    removeTodo:deleteTodoHandler,
  }


  return <todoContext.Provider value={values}>
    {props.children}
  </todoContext.Provider>
}

export default TodocontextProvider;