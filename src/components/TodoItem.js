import React, { useState } from 'react';

function TodoItem({ todo, onDelete, onToggleComplete, onEditTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDetail, setEditDetail] = useState(todo.subtitle);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEditTodo(todo.id, { title: editTitle, subtitle: editDetail });
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditTitle(todo.title);
    setEditDetail(todo.subtitle);
    setIsEditing(false);
  };

  return (
    <div className="bg-serio-white rounded-md shadow p-4 flex items-center justify-between">
      {isEditing ? (
        <div className="flex-grow space-y-2">
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-serio-dark leading-tight focus:outline-none focus:shadow-outline"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-serio-dark leading-tight focus:outline-none focus:shadow-outline"
            value={editDetail}
            onChange={(e) => setEditDetail(e.target.value)}
          />
          <div className="space-x-2">
            <button onClick={handleSaveClick} className="bg-serio-medium-dark hover:bg-serio-dark text-serio-light font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Save
            </button>
            <button onClick={handleCancelClick} className="bg-gray-300 hover:bg-gray-400 text-serio-dark font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex-grow">
            <h2 className={`text-lg font-semibold text-serio-dark ${todo.completed ? 'line-through text-gray-500' : ''}`}>
              {todo.title}
            </h2>
            <p className={`text-sm text-gray-600 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
              {todo.subtitle}
            </p>
          </div>
          <div className="space-x-2 flex items-center">
            <button onClick={handleEditClick} className="flex items-center text-serio-medium-dark hover:text-serio-dark focus:outline-none">
              <span className="mr-1">✏️</span> Edit
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="flex items-center text-serio-medium-dark hover:text-serio-dark focus:outline-none"
            >
              <span className="mr-1">🗑️</span> Delete
            </button>
            <button
              onClick={() => onToggleComplete(todo.id)}
              className={`flex items-center focus:outline-none ${
                todo.completed ? 'text-green-500' : 'text-serio-medium-dark hover:text-serio-dark'
              }`}
            >
              <span className="mr-1">✅</span> {todo.completed ? 'Done' : 'Mark Done'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;