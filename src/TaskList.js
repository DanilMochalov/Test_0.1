import React from 'react';

function TaskList(props) {
  const { tasks, onDelete, onEdit, onToggle } = props;

  function handleDelete(id) {
    onDelete(id);
  }

  function handleEdit(id, description) {
    onEdit(id, description);
  }

  function handleToggle(id) {
    onToggle(id);
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input type="checkbox" checked={task.completed} onChange={() => handleToggle(task.id)} />
          <span>{task.description}</span>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
          <button onClick={() => handleEdit(task.id, prompt('Enter new task description:', task.description))}>Edit</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
