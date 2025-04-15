import React, { useState } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Buy groceries', subtitle: 'Milk, eggs, bread', completed: false },
    { id: 2, title: 'Walk the dog', subtitle: 'Around the park', completed: true },
    { id: 3, title: 'Read a book', subtitle: 'Chapter 3', completed: false },
  ]);
  const [showAddTask, setShowAddTask] = useState(false);

  const handleAddTask = (newTask) => {
    setTodos([...todos, { id: Date.now(), ...newTask, completed: false }]);
    setShowAddTask(false);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleEditTodo = (id, updatedTodo) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      )
    );
  };

  return (
    <div className="bg-serio-light min-h-screen flex flex-col font-sans">
      <nav className="bg-serio-dark p-6 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <a href="/" className="text-serio-primary text-lg font-bold">My Todo App</a>
          <ul className="flex space-x-4 text-serio-light">
            <li>
              <button onClick={() => setShowAddTask(false)} className="hover:text-serio-primary focus:outline-none">
                Todo List
              </button>
            </li>
            <li>
              <button onClick={() => setShowAddTask(true)} className="hover:text-serio-primary focus:outline-none">
                Add Task
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <header className="bg-serio-primary py-12 text-center text-serio-light">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-2">Organize Your Life</h1>
          <p className="text-lg">Stay productive with our simple todo app.</p>
        </div>
      </header>

      <main className="container mx-auto p-6 flex-grow">
        {!showAddTask && (
          <TodoList
            todos={todos}
            onDelete={handleDeleteTodo}
            onToggleComplete={handleToggleComplete}
            onEditTodo={handleEditTodo}
          />
        )}
        {showAddTask && <AddTask onAddTask={handleAddTask} />
        }
      </main>

      <footer className="bg-serio-dark text-serio-light py-8 text-center">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} My Awesome Todo App</p>
          <p className="text-sm">Built with React and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;