import { combineReducers } from "redux";
import articles from './articles'
import todos from './todos'

export default combineReducers({
  todos,
  articles
})