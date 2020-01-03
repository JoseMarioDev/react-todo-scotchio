import React, { useState } from 'react';

import './App.css';
import { Todo } from './Todo';

function App() {
  const [todos, setTodos] = useState([
    { text: 'finish portfolio', isCompleted: false },
    { text: 'finish resume', isCompleted: false },
    { text: 'update LinkedIn', isCompleted: false },
  ]);

  function TodoForm({ addTodo }) {
    const apple = 'apple';
    const truck = 'tonka';

    const [value, setValue] = useState('');

    const handleSubmit = event => {
      event.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue('');
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    );
  }

  function Todo({ todo, index, completeTodo }) {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
      >
        {todo.text}
        <div>
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={() => removeTodo(index)}>delete</button>
        </div>
      </div>
    );
  }

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
