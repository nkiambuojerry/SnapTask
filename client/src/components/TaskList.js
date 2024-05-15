import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('https://snaptask-backend-f3a26c6f6c97.herokuapp.com/api/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error(error));
  }, []);

  const deleteTask = (id) => {
    axios.delete(`https://snaptask-backend-f3a26c6f6c97.herokuapp.com/api/tasks/${id}`)
      .then(() => setTasks(tasks.filter(task => task._id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Task List</h1>
      <Link to="/add">Add Task</Link>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            {task.name}
            <Link to={`/update/${task._id}`}>Update</Link>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
