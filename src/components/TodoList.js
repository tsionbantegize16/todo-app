import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Complete assignments', completed: true },
    { id: 2, text: 'Cook dinner', completed: false, subtasks: [
      { id: 2.1, text: 'Buy groceries', completed: false },
      { id: 2.2, text: 'Prepare recipe', completed: false },
    ]},
    { id: 3, text: 'Lunch at Marina Mall', completed: false },
    { id: 4, text: 'Meet Kelly', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleSubtaskToggle = (parentId, subtaskId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === parentId
          ? {
              ...todo,
              subtasks: todo.subtasks.map((subtask) =>
                subtask.id === subtaskId ? { ...subtask, completed: !subtask.completed } : subtask
              ),
            }
          : todo
      )
    );
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTodos((prevTodos) => [...prevTodos, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full sm:w-96 flex flex-col items-start">
      <div className="text-sm text-gray-500 mb-4">Thursday, 23 August 2018</div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">To Do List</h2>
      {todos.map((todo) => (
        <React.Fragment key={todo.id}>
          <TodoItem task={todo.text} completed={todo.completed} onToggle={() => handleToggle(todo.id)} />
          {todo.subtasks && todo.subtasks.map((subtask) => (
            <TodoItem
              key={subtask.id}
              task={`- ${subtask.text}`}
              completed={subtask.completed}
              onToggle={() => handleSubtaskToggle(todo.id, subtask.id)}
              isSubtask={true}
            />
          ))}
        </React.Fragment>
      ))}
      <div className="mt-4 w-full">
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="add task ..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="mt-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md py-2 px-4 text-sm"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
      <button className="fixed bottom-6 right-6 bg-purple-500 hover:bg-purple-600 text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center text-2xl font-bold">
        +
      </button>
    </div>
  );
}

export default TodoList;