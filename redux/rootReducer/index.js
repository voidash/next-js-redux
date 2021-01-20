import { combineReducers } from 'redux';
import { counterReducer, timeReducer } from '../reducer/counterReducer';

export default combineReducers({ counter: counterReducer, timer: timeReducer });