import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import UpdateTask from './components/UpdateTask';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={TaskList} />
          <Route path="/add" element={AddTask} />
          <Route path="/update/:id" element={UpdateTask} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
