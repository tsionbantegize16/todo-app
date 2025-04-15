import React, { useState } from 'react';

function AddTask({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask({ title, detail });
      setTitle('');
      setDetail('');
    }
  };

  return (
    <div className="bg-serio-white rounded-md shadow p-4 mt-4">
      <h2 className="text-xl font-semibold mb-4 text-serio-dark">Add New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-serio-dark text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-serio-dark leading-tight focus:outline-none focus:shadow-outline"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="detail" className="block text-serio-dark text-sm font-bold mb-2">
            Detail
          </label>
          <textarea
            id="detail"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-serio-dark leading-tight focus:outline-none focus:shadow-outline"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-serio-primary hover:bg-serio-medium-dark text-serio-light font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          ADD
        </button>
      </form>
    </div>
  );
}

export default AddTask;