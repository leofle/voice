import { combineReducers } from 'redux'
import counter from './counter'
import labels from './input'

export default combineReducers({
  counter,
  labels
})
