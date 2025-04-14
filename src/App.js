import React from 'react';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="bg-gradient-to-br from-purple-300 to-blue-300 min-h-screen flex items-center justify-center py-10">
      <TodoList />
    </div>
  );
}

export default App;