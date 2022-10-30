// == Import
import React from 'react';
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import List from 'src/components/List';

import tasks from 'src/data/tasks';
import './styles.scss';

// == Component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: Number(1),
      task: '',
    };
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(value) {
    console.log(value);
    this.setState({
      task: value,
    })
  }
  
  render() {
    const { counter, task } = this.state;
    return (
      <div className="app">
        <Form task={task} addTask={this.handleAddTask} />
        <Counter counter={counter} />
        <List tasks={tasks} />
      </div>
    );
  } 
}

// == Export
export default App;
