import React, { createContext, useContext, useCallback } from 'react';
import { withSnackbar, SnackbarProvider, WithSnackbarProps } from 'notistack';

export type NotificationContextType = {
  log: (msg: string) => void;
  success: (msg: string) => void;
  info: (msg: string) => void;
  warning: (msg: string) => void;
  error: (msg: string) => void;
};

const defaultNotification = {} as NotificationContextType;
const NotificationContext = createContext(defaultNotification);

function NotificationProviderInternal<TProps extends WithSnackbarProps>(props: TProps) {
  const { enqueueSnackbar } = props;
  const log = useCallback(
    msg =>
      enqueueSnackbar(msg, {
        variant: 'default'
      }),
    [enqueueSnackbar]
  );
  const success = useCallback(
    msg =>
      enqueueSnackbar(msg, {
        variant: 'success'
      }),
    [enqueueSnackbar]
  );
  const info = useCallback(
    msg =>
      enqueueSnackbar(msg, {
        variant: 'info'
      }),
    [enqueueSnackbar]
  );
  const warning = useCallback(
    msg =>
      enqueueSnackbar(msg, {
        variant: 'warning'
      }),
    [enqueueSnackbar]
  );
  const error = useCallback(
    msg =>
      enqueueSnackbar(msg, {
        variant: 'error'
      }),
    [enqueueSnackbar]
  );
  return (
    <NotificationContext.Provider
      value={{
        log,
        success,
        info,
        warning,
        error
      }}
      {...props}
    />
  );
}

export function NotificationProvider<
  TProps extends { maxNotifications: number; children: JSX.Element | JSX.Element[] }
>(props: TProps) {
  const WrappedComponent = withSnackbar(NotificationProviderInternal);
  return (
    <SnackbarProvider maxSnack={props.maxNotifications}>
      <WrappedComponent>{props.children}</WrappedComponent>
    </SnackbarProvider>
  );
}

export function useNotification() {
  const context = useContext(NotificationContext);
  if (context === defaultNotification) {
    throw new Error(`useNotification must be used within a NotificationProvider`);
  }
  return context;
}
