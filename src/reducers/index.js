import { combineReducers } from 'redux'
import counter from './counter'
import ballers from './balls'

export default combineReducers({
  counter,
  ballers
})
