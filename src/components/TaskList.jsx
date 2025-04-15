import React from 'react';
import TaskCard from './TaskCard';

function TaskList({ todos, onToggleComplete, onDeleteTodo }) {
  return (
    <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {todos.map((todo) => (
        <TaskCard
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
}

export default TaskList;