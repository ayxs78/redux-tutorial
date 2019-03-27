import {ADD_TODO} from "../constants/action-types";

export default function todos(state = [], action) {
  if(action.type === ADD_TODO) {
    return state.concat([action.text]);
  }
  return state;
}