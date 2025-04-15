import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onDelete, onToggleComplete, onEditTodo }) {
  return (
    <section className="space-y-4"> {/* Removed p-4 to let main handle padding */}
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
          onEditTodo={onEditTodo}
        />
      ))}
    </section>
  );
}

export default TodoList;