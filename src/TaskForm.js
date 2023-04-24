import React, { useState } from 'react';

function TaskForm(props) {
  const { onAdd } = props;
  const [description, setDescription] = useState('');

  function handleChange(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAdd(description);
    setDescription('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={description} onChange={handleChange} />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
