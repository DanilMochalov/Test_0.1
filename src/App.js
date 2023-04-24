import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';


function App() {
    const [tasks, setTasks] = useState([]);
  
    function handleAdd(description) {
      const newTask = { id: Date.now(), description: description, completed: false };
      setTasks([...tasks, newTask]);
    }
  
    function handleDelete(id) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  
    function handleEdit(id, description) {
      setTasks(
        tasks.map((task) => {
          if (task.id === id) {
            return { ...task, description: description };
          }
          return task;
        })
      );
    }
  
    function handleToggle(id) {
      setTasks(
        tasks.map((task) => {
          if (task.id === id) {
            return { ...task, completed: !task.completed };
          }
          return task;
        })
      );
    }
  
    return (
      <div>
        <h1>ToDo List</h1>
        <TaskForm onAdd={handleAdd} />
        <TaskList tasks={tasks} onDelete={handleDelete} onEdit={handleEdit} onToggle={handleToggle} />
      </div>
    );
  }
  
  export default App;