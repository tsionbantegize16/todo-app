import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import FilterButtons from '../components/FilterButtons';
import useLocalStorage from '../hooks/useLocalStorage';

function TodosPage() {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now(), text, completed: false }]);
    }
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
    setTodos(todos.filter(todo => !todo.completed));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        My To-Do List
      </h1>
      <TodoForm onAddTodo={addTodo} />
      <div className="flex items-center justify-between mb-4">
        <FilterButtons filter={filter} onFilterChange={setFilter} />
        {todos.filter(todo => todo.completed).length > 0 && (
          <button
            onClick={clearCompletedTodos}
            className="text-sm text-gray-500 hover:text-red-500 focus:outline-none"
          >
            Clear Completed
          </button>
        )}
      </div>
      {filteredTodos().length > 0 ? (
        <TodoList
          todos={filteredTodos()}
          onToggleComplete={toggleComplete}
          onDeleteTodo={deleteTodo}
        />
      ) : (
        <p className="text-gray-600 italic text-center mt-4">
          No tasks matching the current filter.
        </p>
      )}
    </div>
  );
}

export default TodosPage;