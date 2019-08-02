import { combineReducers, Reducer } from 'redux';
import authentication from './authentication';

const combined = combineReducers({ authentication });
export default combined;
export type ReduxState = (typeof combined) extends Reducer<infer U> ? U : never;
