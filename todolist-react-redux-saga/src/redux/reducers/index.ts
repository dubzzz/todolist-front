import { combineReducers, Reducer } from 'redux';

const combined = combineReducers({});
export default combined;
export type ReduxState = (typeof combined) extends Reducer<infer U> ? U : never;
