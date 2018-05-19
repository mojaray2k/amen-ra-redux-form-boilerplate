import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

//Combine Reducers
let reducers = combineReducers({
  form: reduxFormReducer // requires a mount at "form"
})

export default reducers