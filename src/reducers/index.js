import { combineReducers } from 'redux'
import counter from './counter'
import labels from './input'
import records from './record'

export default combineReducers({
  counter,
  labels,
  records
})
