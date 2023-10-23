import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const removeAllTasks = () => {
    setTodos([]);
  };

  return (
    <div className="todo-list">
      <h1>Raji's Todo List</h1>
      <input
        type="text"
        placeholder="New Task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button className="remove-button" onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={removeAllTasks} className="remove-all-button">Remove All Tasks</button>
    </div>
  );
}

export default TodoList;
