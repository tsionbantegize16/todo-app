import React from 'react';

function TodoItem({ todo, onToggleComplete, onDeleteTodo }) {
  return (
    <li className="flex items-center justify-between bg-white shadow-sm rounded-md py-2 px-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500 mr-2 cursor-pointer"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)}
        />
        <span className={`text-gray-800 ${todo.completed ? 'line-through' : ''}`}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDeleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700 focus:outline-none"
      >
        {/* Using a simple 'X' as a delete icon */}
        <span aria-label="Delete" role="img">❌</span>
      </button>
    </li>
  );
}

export default TodoItem;