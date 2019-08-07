export class TryLoginByCreds {
  static readonly type = '[Authentication] Try login by creds';
  constructor(public username: string, public password: string) {}
}

export class TryLoginByToken {
  static readonly type = '[Authentication] Try login by token';
  constructor() {}
}

export class TryLogout {
  static readonly type = '[Authentication] Try logout';
  constructor(public silent?: boolean) {}
}
