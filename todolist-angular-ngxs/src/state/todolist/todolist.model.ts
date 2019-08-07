import * as Api from '../../api';

export enum TodoSyncState {
  Noop = 'noop',
  Add = 'add',
  Edit = 'edit',
  Remove = 'remove'
}

export interface TodolistStateModel {
  readonly ready: boolean;
  readonly todos: ReadonlyArray<{
    readonly data: Api.Todo;
    readonly state: TodoSyncState;
  }>;
}
