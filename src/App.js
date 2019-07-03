import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { addTask, toggleTask } from './actions'
import Task from "./Task";


class App extends React.Component {

  state = {
    input : ''
  }

  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.input.trim()) {
      return;
    }
    this.props.addTask(this.state.input);
    this.setState({input : ''});
  }

  handleChange(e) {

    e.preventDefault();
    this.setState({input : e.target.value});
  }

  render() { 
    return (
      <div className="App">
        <div>

          <form onSubmit={this.handleSubmit.bind(this)}>
           <input type="text" name="task" value={this.state.input} onChange={this.handleChange.bind(this)}/>
           <button type="submit"> Add Task </button>
          </form>
        </div>
        <div>
          <ul>
              {this.props.tasks.map(task =>
                <Task
                  {...task}
                  onClick={() => this.props.toggleTask(task.id)}
                />
              )}
          </ul>  
        </div>   
      </div>

    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleTask: id => dispatch(toggleTask(id)),
  addTask: text => dispatch(addTask(text))
})

const mapStateToProps = state => ({
  tasks: state
})

export default connect(mapStateToProps, mapDispatchToProps) (App);
