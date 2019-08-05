import { useEffect, useState } from 'react';
import { withSnackbar, WithSnackbarProps } from 'notistack';
import { useSelector, useDispatch } from 'react-redux';
import { ReduxState } from '../redux/reducers';
import { NotificationLevel } from '../redux/reducers/notification';
import { removeNotifyAction } from '../redux/actions/notification';

function Notifier<TProps extends WithSnackbarProps>(props: TProps) {
  const { enqueueSnackbar } = props;
  const [onGoingNotifications, setOnGoingNotifications] = useState({} as { [id: string]: true });
  const notifications = useSelector((state: ReduxState) => state.notification.notifications);
  const dispatch = useDispatch();

  useEffect(() => {
    const computeVariant = (level: NotificationLevel) => {
      switch (level) {
        case NotificationLevel.Success:
          return 'success';
        case NotificationLevel.Info:
          return 'info';
        case NotificationLevel.Warn:
          return 'warning';
        case NotificationLevel.Error:
          return 'error';
        case NotificationLevel.Log:
        default:
          return 'default';
      }
    };
    for (const n of notifications) {
      if (onGoingNotifications[n.id]) continue;

      setOnGoingNotifications(o => ({ ...o, [n.id]: true }));
      enqueueSnackbar(n.message, {
        variant: computeVariant(n.level),
        onClose: () => {
          setOnGoingNotifications(o => {
            const { [n.id]: nid, ...others } = o;
            return others;
          });
        }
      });
      dispatch(removeNotifyAction(n.id));
    }
  }, [notifications, onGoingNotifications, dispatch, enqueueSnackbar]);

  return null;
}

export default withSnackbar(Notifier);
