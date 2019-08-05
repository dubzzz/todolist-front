import { combineReducers, Reducer } from 'redux';
import authentication from './authentication';
import notification from './notification';

const combined = combineReducers({ authentication, notification });
export default combined;
export type ReduxState = (typeof combined) extends Reducer<infer U> ? U : never;
