import input from './input';
import todos from './todos';
import { combineReducers } from 'redux';

export default combineReducers({
  input,
  todos
});
