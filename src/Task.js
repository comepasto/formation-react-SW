import React from "react";

function Task(props) {
    const status = props.done ? "DONE" : "TODO";
    return (
      <div onClick={props.handleCheck} >
        <p>Task: {props.name} Status: {status}</p>
      </div>
    );
  }
  
  export default Task;