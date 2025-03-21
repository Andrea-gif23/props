import React from 'react';

function Task({ task, deleteTask, toggleComplete }) {
  return (
    <div
      style={{
        textDecoration: task.completed ? 'line-through' : 'none',
        cursor: 'pointer'
      }}
      onClick={() => toggleComplete(task.id)}
    >
      {task.text}
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
  );
}

export default Task;