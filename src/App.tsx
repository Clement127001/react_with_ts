import Todos from "./Components/Todos";
import Todo from "./Models/Todo";
function App() {

  const todos=[new Todo('Learn React'),new Todo('Learn Typescript')]
  return (
    <div >
      <Todos items={todos}>
        <h1>React Todos</h1>
        <p>add your todos and make your progress to the goal</p>
      </Todos>
    </div>
  );
}

export default App;
