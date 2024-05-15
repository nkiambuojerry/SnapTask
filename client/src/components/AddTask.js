import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const addTask = () => {
    axios.post('https://snaptask-backend-f3a26c6f6c97.herokuapp.com/api/tasks', { name })
      .then(() => navigate('/'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Add Task</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
};

export default AddTask;
