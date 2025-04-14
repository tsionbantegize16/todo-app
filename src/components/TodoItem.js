// src/components/TodoItem.js
import React from 'react';

function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li className="flex items-center justify-between py-2 border-b border-gray-200">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="mr-2 form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
      />
      <span className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}>
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="ml-4 text-red-500 hover:text-red-700 focus:outline-none"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;