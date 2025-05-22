import React from 'react';

function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map(todo => (
        <li
          key={todo.id}
          onClick={() => onToggle(todo.id)}
          style={{
            cursor: 'pointer',
            textDecoration: todo.completed ? 'line-through' : 'none',
          }}
        >
          {todo.task}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
