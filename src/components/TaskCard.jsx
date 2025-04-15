import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'; // Using Heroicons for delete

function TaskCard({ todo, onToggleComplete, onDeleteTodo }) {
  const priorityColors = {
    low: 'bg-green-100 text-green-700',
    medium: 'bg-yellow-100 text-yellow-700',
    high: 'bg-red-100 text-red-700',
  };

  const priorityClassName = priorityColors[todo.priority] || '';

  const formattedDate = todo.dueDate ? new Date(todo.dueDate).toLocaleDateString() : 'No Due Date';
  const createdDate = new Date(todo.createdAt).toLocaleDateString();

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className={`font-semibold text-lg text-gray-800 ${todo.completed ? 'line-through' : ''}`}>
            {todo.name}
          </h3>
          <button onClick={() => onDeleteTodo(todo.id)} className="text-red-500 hover:text-red-700 focus:outline-none">
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="mb-2">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${priorityClassName}`}>
            {todo.priority}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-1">Due Date: {formattedDate}</p>
        <p className="text-gray-500 text-xs">Created At: {createdDate}</p>
      </div>
      <div className="mt-4">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
            checked={todo.completed}
            onChange={() => onToggleComplete(todo.id)}
          />
          <span className="ml-2 text-gray-700 text-sm">Mark as Complete</span>
        </label>
      </div>
    </div>
  );
}

export default TaskCard;