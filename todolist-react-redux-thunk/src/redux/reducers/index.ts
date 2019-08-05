import { combineReducers, Reducer } from 'redux';
import authentication from './authentication';
import notification from './notification';
import todolist from './todolist';

const combined = combineReducers({ authentication, notification, todolist });
export default combined;
export type ReduxState = (typeof combined) extends Reducer<infer U> ? U : never;
