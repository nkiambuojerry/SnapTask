import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddTask = () => {
  const [name, setName] = useState('');
  const history = useHistory();

  const addTask = () => {
    axios.post('/api/tasks', { name })
      .then(() => history.push('/'))
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
