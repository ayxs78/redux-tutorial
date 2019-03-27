import { ADD_ARTICLE, ADD_TODO } from "../constants/action-types";

export function addArticle( payload ) {
  return {
    type: ADD_ARTICLE,
    payload
  }
}

export function addTodo( text ) {
  return {
    type: ADD_TODO,
    text: text
  }
}
