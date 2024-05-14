import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import UpdateTask from './components/UpdateTask';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={TaskList} />
          <Route path="/add" component={AddTask} />
          <Route path="/update/:id" component={UpdateTask} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
