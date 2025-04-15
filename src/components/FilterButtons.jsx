import React from 'react';

function FilterButtons({ filter, onFilterChange }) {
  return (
    <div className="flex space-x-2 mb-4 justify-center">
      <button
        className={`py-2 px-4 rounded-md text-sm font-medium ${
          filter === 'all' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        onClick={() => onFilterChange('all')}
      >
        All
      </button>
      <button
        className={`py-2 px-4 rounded-md text-sm font-medium ${
          filter === 'active' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        onClick={() => onFilterChange('active')}
      >
        Active
      </button>
      <button
        className={`py-2 px-4 rounded-md text-sm font-medium ${
          filter === 'completed' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        onClick={() => onFilterChange('completed')}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterButtons;