import React from 'react';

function TodoItem({ task, completed, onToggle, isSubtask = false }) {
  return (
    <div className={`flex items-center justify-between py-2 border-b border-gray-200 ${isSubtask ? 'ml-4' : ''}`}>
      <span className={`text-gray-700 ${completed ? 'line-through text-gray-400' : ''}`}>
        {task}
      </span>
      <input
        type="checkbox"
        className="rounded border border-gray-300 w-5 h-5 focus:ring-2 focus:ring-blue-500 cursor-pointer"
        checked={completed}
        onChange={onToggle}
      />
    </div>
  );
}

export default TodoItem;