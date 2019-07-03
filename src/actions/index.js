export const addTask = text => ({
    type: 'ADD_TASK',
    text
  })
  
  export const toggleTask = id => ({
    type: 'TOGGLE_TASK',
    id
  })