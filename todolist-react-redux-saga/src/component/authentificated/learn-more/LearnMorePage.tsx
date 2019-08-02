import React from 'react';
import Typography from '@material-ui/core/Typography';

type Props = {};

export default function LearnMorePage(props: Props) {
  return (
    <>
      <Typography variant="h4" component="h2">
        App
      </Typography>
      <Typography>
        This app makes you able to maintain your todos up-to-date. Multiple users can access and edit the todos in
        parallel*.
      </Typography>
      <Typography variant="subtitle2">
        Parallel: users have to share the same local storage (be on same browser)
      </Typography>
      <Typography variant="h4" component="h2">
        APIs
      </Typography>
      <Typography>
        For the sake of the demo, all the API calls are mocked. In order to be as realistic as possible they are delayed
        and subject to failures. Any data that needs to be persisted such as authentification tokens or todos are stored
        within the local storage of the browser in use.
      </Typography>
      <Typography variant="h4" component="h2">
        Revoke token
      </Typography>
      <Typography>
        The token used and stored to keep the user connected to the API can be revoked by updating the value of{' '}
        <em>window.validToken</em> in the console or by clicking{' '}
        <button
          onClick={() =>
            ((window as any).validToken = Math.random()
              .toString(16)
              .substr(2))
          }
        >
          here
        </button>
        .
      </Typography>
    </>
  );
}
