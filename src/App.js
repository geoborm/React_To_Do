import React, { useState } from 'react'

function App() {
  
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  
  const addTodDo = (todo) => {
    const newToDo = {
      id: Math.random(),
      todo: todo,
    };

    setList([...list, newToDo]);
    
    setInput("");
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  return( 
    <div>
      <h1>To Do List</h1>
      <input type ="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={() => addTodDo(input)}>+</button>
      <ul>
        {list.map((todo) => (
        <li key={todo.id}>
          {todo.todo}
          <button onClick={() => deleteTodo(todo.id)}>&times;</button>
        </li> ))}
      </ul>
  </div>  
  );
};

export default App
