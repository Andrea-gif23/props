import React, { useState } from 'react';

function AddTaskForm({ addTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Añadir nueva tarea"
      />
      <button type="submit">Añadir Tarea</button>
    </form>
  );
}

export default AddTaskForm;