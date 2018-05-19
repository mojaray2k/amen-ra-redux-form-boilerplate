import { createStore, combineReducers } from 'redux'
import { counter, users } from './reducers'

let store = createStore(combineReducers({
  counterState: counter,
  userState: users
}))

let button = document.querySelector('.add-one')
button.onclick = function() {

  store.dispatch({
    type: 'ADD',
    value: 1
  })
  
  console.log(store.getState())
}

let userButton = document.querySelector('.add-user')
userButton.onclick = function() {

  store.dispatch({
    type: 'ADD_USER',
    user: 'Amen'
  })
  
  console.log(store.getState())
}

store.subscribe(function(){
  console.log(store.getState())
})
