import { NOTIFICATION_ADD, NOTIFICATION_REMOVE } from '../actions/notification';
import { Actions } from '../actions/notification';

export enum NotificationLevel {
  Log = 'Log',
  Success = 'Success',
  Info = 'Info',
  Warn = 'Warn',
  Error = 'Error'
}
export type NotificationState = {
  notifications: { id: string; message: string; level: NotificationLevel }[];
};
const initialState: NotificationState = {
  notifications: []
};

export default (state = initialState, action: Actions): typeof state => {
  switch (action.type) {
    case NOTIFICATION_ADD: {
      const { id, message, level } = action.payload;
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            id,
            message,
            level
          }
        ]
      };
    }
    case NOTIFICATION_REMOVE: {
      const { id } = action.payload;
      return {
        ...state,
        notifications: state.notifications.filter(n => n.id !== id)
      };
    }
    default:
      return state;
  }
};
