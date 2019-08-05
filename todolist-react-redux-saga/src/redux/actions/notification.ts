import { NotificationLevel } from '../reducers/notification';

// types
export const NOTIFICATION_ADD = 'NOTIFICATION_ADD';
export const NOTIFICATION_REMOVE = 'NOTIFICATION_REMOVE';

// actions
export const notifyAction = (message: string, level: NotificationLevel) =>
  ({
    type: NOTIFICATION_ADD,
    payload: {
      id: Math.random()
        .toString(16)
        .substr(2),
      message,
      level
    }
  } as const);
export const removeNotifyAction = (id: string) =>
  ({
    type: NOTIFICATION_REMOVE,
    payload: { id }
  } as const);

export type ActionNotify = ReturnType<typeof notifyAction>;
export type ActionRemoveNotify = ReturnType<typeof removeNotifyAction>;
export type Actions = ActionNotify | ActionRemoveNotify;
