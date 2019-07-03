import React from "react";

function Task(props) {

    return (
      <li onClick={props.onClick}>
    {props.text}: {props.done ? "DONE" : "TODO"} 
   </li>
    );
  }
  
  export default Task;