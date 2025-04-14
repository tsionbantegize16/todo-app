// src/components/TodoList.js
import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (id) => {
    // Logic to delete a todo
  };

  const handleToggleComplete = (id) => {
    // Logic to toggle a todo's completion status
  };

  return (
    <div className="bg-white shadow-md rounded-md p-6 w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">My To-Do List</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add new task"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          onClick={handleAddTodo}
          className="ml-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add
        </button>
      </div>
      {todos.length === 0 ? (
        <p className="text-gray-500">No tasks yet!</p>
      ) : (
        <ul className="list-none p-0">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={handleDeleteTodo}
              onToggle={handleToggleComplete}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;