const tasks = (state = [], action) => {
    let idx = state.length;
    switch (action.type) {
      case 'ADD_TASK':
        return [
          ...state,
          {
            id: idx,
            text: action.text,
            done: false
          }
        ]
      case 'TOGGLE_TASK':
        return state.map(task =>
          (task.id === action.id)
            ? {...task, done: !task.done}
            : task
        )
      default:
            console.log('state is', state);
        return state
    }
  }
  
  export default tasks