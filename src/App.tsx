import NewTodo from "./Components/NewTodo";
import Todos from "./Components/Todos";

import TodocontextProvider from "./Store/todo-context";

function App() {

  return (
    <TodocontextProvider>
      <NewTodo />
      <Todos  />
    </TodocontextProvider>
  );
}

export default App;
