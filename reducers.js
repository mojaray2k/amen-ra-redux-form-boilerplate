const counter = function(state = 0, action){
  if(action.type === 'ADD'){
    return state + action.value
  }  
  return state
}

const users = function(state = [], action){
  if(action.type === 'ADD_USER'){
    return state.concat(action.user)
  }  
  return state
}

export { counter, users }