// == Import
import React from 'react';
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import List from 'src/components/List';

import tasksList from 'src/data/tasks';
import './styles.scss';

// == Component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasksList,
      inputTaskLabel: '',  
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
  }

  handleInputChange(newValue) {
    this.setState({
      inputTaskLabel: newValue,
    })
  }

  handleCheckChange(id){
    const { tasks } = this.state;
    //copie par valeur
    const newTasksArray = tasks.map((task) =>{
      if(task.id !== id) {
        return task;
      }
      // return {
      //   id: id,
      //   label: task.label,
      //   done: !task.done,
      // }  
      // simplified version to midifiy just necessary elements
      return {
        ...task,
        done: !task.done,
      };
    });

    this.setState({
      tasks: newTasksArray,
    });
  }

  handleFormSubmit(){
    // console.log('submit in handler');
    const { inputTaskLabel, tasks } = this.state;
    const idTasksArray = tasks.map((task) => task.id);
    // find the highest id in array in the copy of array with ids (...)
    const highestId = Math.max(...idTasksArray);
    const newId = highestId + 1;

    const newTask = {
      id: newId,
      label: inputTaskLabel,
      done: false,
    };

    // stockage par reference (tasks = tasksList) et stockage par valeur (...array)
    // make a copy on tasks array with a new task added
    const tasksCopy = [...tasks];
    tasksCopy.push(newTask);
    this.setState({
      tasks: tasksCopy,
      // erase input after submit
      inputTaskLabel: '',
    });
  }
  
  render() {
    const { tasks, inputTaskLabel } = this.state;
    const notDoneTasks = tasks.filter((item) => item.done === false);
    const nbNotDone =  notDoneTasks.length;
    const doneTasks = tasks.filter((item) => item.done === true);
    // to show fist not done tasks and after done
    const orderedTasks = [...notDoneTasks, ...doneTasks];

    return (
      <div className="app">
        <Form 
          inputTaskLabel={inputTaskLabel} 
          handleInputChange={this.handleInputChange} 
          handleFormSubmit={this.handleFormSubmit}
        />
        <Counter counter={nbNotDone} />
        <List tasks={orderedTasks} handleCheckChange={this.handleCheckChange} />
      </div>
    );
  } 
}

// == Export
export default App;
