import { useState } from "react";
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodoItem, setNewTodoitem]= useState("")

  const handleAddTodo = (event) => {
    
    ///const newTodoItem = event.target.value;
    const newTodoList = [...todos, newTodoItem];

    setTodos(newTodoList);
  };
const handleinputChange = (event) => {
  setNewTodoitem(event.target.value)
  ///console.log(event.target.value)
}
  return (
    <div className="App">
      <h1>React Debugging Challenge - 3</h1>
      <div>
        <input name="todo" placeholder="Type TODO description" onChange={handleinputChange} value={newTodoItem}/>
        <button onClick={handleAddTodo}>ADD TODO</button>
      </div>
      <div>
        <h3>List of Todos</h3>
        {todos.length === 0 ? (
          <p>None</p>
        ) : (
          <ul>
            {todos.map((todo, idx) => (
              // NOTE - Using list indexes as keys is not the ideal approach. See here - https://reactjs.org/docs/lists-and-keys.html
              // Index works for us here as we don't expect the order of items to change
              <li key={idx}>{todo}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
/*
 * React Debugging Challenge 3 Debrief
 * By: Nabhan Abdulla P V (nabhanabdullapv@gmail.com)
 *
 * Challenge Deconstruction Video will be out on Sundays!
 * Stay tuned to updates at https://www.youtube.com/channel/UCwF_G-nRCIiigNnojgAgs5Q
 *
 
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (event) => {
    const newTodoItem = event.target.value;
    const newTodoList = [...todos, newTodoItem];

    setTodos(newTodoList);
  };

  return (
    <div className="App">
      <h1>React Debugging Challenge - 3</h1>
      <div>
        <input name="todo" placeholder="Type TODO description" />
        <button onClick={handleAddTodo}>ADD TODO</button>
      </div>
      <div>
        <h3>List of Todos</h3>
        {todos.length === 0 ? (
          <p>None</p>
        ) : (
          <ul>
            {todos.map((todo, idx) => (
              // NOTE - Using list indexes as keys is not the ideal approach. See here - https://reactjs.org/docs/lists-and-keys.html
              // Index works for us here as we don't expect the order of items to change
              <li key={idx}>{todo}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
 */