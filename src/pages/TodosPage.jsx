import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import FilterButtons from '../components/FilterButtons';
import AddTodoModal from '../components/AddTodoModal';
import useLocalStorage from '../hooks/useLocalStorage';

function TodosPage() {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [filter, setFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTodo = (newTask) => {
    setTodos([...todos, { id: Date.now(), ...newTask, completed: false, createdAt: new Date().toISOString() }]);
    setIsModalOpen(false);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Task List</h1>
        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={openModal}
        >
          Add New Task
        </button>
      </div>

      <AddTodoModal isOpen={isModalOpen} onClose={closeModal} onAddTask={addTodo} />

      <div className="flex items-center justify-between mb-4">
        <FilterButtons filter={filter} onFilterChange={setFilter} />
        {todos.filter((todo) => todo.completed).length > 0 && (
          <button
            onClick={clearCompletedTodos}
            className="text-sm text-gray-500 hover:text-red-500 focus:outline-none"
          >
            Clear Completed
          </button>
        )}
      </div>

      {filteredTodos().length > 0 ? (
        <TaskList todos={filteredTodos()} onToggleComplete={toggleComplete} onDeleteTodo={deleteTodo} />
      ) : (
        <p className="text-gray-600 italic text-center mt-4">
          No tasks matching the current filter.
        </p>
      )}
    </div>
  );
}

export default TodosPage;