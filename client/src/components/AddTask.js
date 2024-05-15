import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const AddTask = () => {
  const [name, setName] = useState('');
  const history = useHistory();

  const addTask = () => {
    axios.post('https://snaptask-backend-f3a26c6f6c97.herokuapp.com/api/tasks', { name })
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
