import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const UpdateTask = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const history = useHistory();

  useEffect(() => {
    axios.get(`https://snaptask-backend-f3a26c6f6c97.herokuapp.com/api/tasks/${id}`)
      .then(response => setName(response.data.name))
      .catch(error => console.error(error));
  }, [id]);

  const updateTask = () => {
    axios.put(`https://snaptask-backend-f3a26c6f6c97.herokuapp.com/api/tasks/${id}`, { name })
      .then(() => history.push('/'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Update Task</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={updateTask}>Update</button>
    </div>
  );
};

export default UpdateTask;
