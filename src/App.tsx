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

  const deleteTodoHandler=(todoId:string)=>
  {
    const updatedTodo=todos.filter(item=>item.id!==todoId);

    setTodos(updatedTodo);
  }
  return (
    <div >
      <NewTodo onAddTodo={onAddTodoHandler}/>
      <Todos items={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
