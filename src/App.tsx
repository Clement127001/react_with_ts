import { useState } from "react";
import NewTodo from "./Components/NewTodo";
import Todos from "./Components/Todos";
import Todo from "./Models/Todo";
function App() {

  const [todos,setTodos]=useState<Todo[]>([]);

  const onAddTodoHandler=(todoText:string)=>
  {
    //add the new todo to the list and manage it with help of 
    const newTodo=new Todo(todoText);
    setTodos(prevTodos=>prevTodos.concat(newTodo));
  }
  return (
    <div >
      <NewTodo onAddTodo={onAddTodoHandler}/>
      <Todos items={todos} />
    </div>
  );
}

export default App;
