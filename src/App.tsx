
import Todos from "./Components/Todos";
function App() {
  return (
    <div >
      <Todos items={['Learn React','Learn Typescript']}>
        <h1>React Todos</h1>
        <p>add your todos and make your progress to the goal</p>
      </Todos>
    </div>
  );
}

export default App;
