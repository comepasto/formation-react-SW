import React from 'react';
import logo from './logo.svg';
import './App.css';
import Task from "./Task";

const tasks = [
        {name: "Learn React", done: false},
        {name: "Learn CSS", done: true},
        {name: "Web development", done: true}
    ];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.initList()
  }

  initList() {
    const taskList = this.generateTasks(tasks);

    return {
      taskList
    };
  }

  generateTasks(tasks) {
    return [...tasks].map((task, index) => {
      return { ...task, id: index };
    });
  }

  addTask() {
    const index = this.state.taskList.length;
    let newTask = {name: "New task", done:false, id: index }
    const taskList = [...this.state.taskList, newTask];
    this.setState({taskList})
  }

  handleCheck(task) { 
    this.state.taskList.find(t => t.id === task.id).done = !task.done;
    this.setState(this.state.taskList);
  }


  render() { 
    return (
      <div className="App">

        {this.state.taskList.map(task => 
          <Task {...task}  handleCheck={this.handleCheck.bind(this, task)}/>
        )}

        <div>
          <button onClick={this.addTask.bind(this)}>Add task</button>
        </div>
      </div>

    );
  }
}

export default App;
