import * as Api from '../../api';

export class RefreshTodos {
  static readonly type = '[Todolist] Refresh todos';
  constructor(public todos: Api.Todo[]) {}
}

export class UpdateRefreshStatus {
  static readonly type = '[Todolist] Update refresh status';
  constructor(public status: boolean) {}
}

export class TryAddTodo {
  static readonly type = '[Todolist] Try add todo';
  constructor(public token: string, public task: string) {}
}

export class TryToggleTodo {
  static readonly type = '[Todolist] Try toggle todo';
  constructor(public token: string, public guid: string) {}
}

export class TryRemoveTodo {
  static readonly type = '[Todolist] Try remove todo';
  constructor(public token: string, public guid: string) {}
}
