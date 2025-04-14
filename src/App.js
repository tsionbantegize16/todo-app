// src/App.js
import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
      <TodoList />
    </div>
  );
}

export default App;