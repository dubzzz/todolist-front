import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HelpIcon from '@material-ui/icons/Help';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9)
    }
  }
}));

type Props = { drawerOpened: boolean; toggleDrawer: () => void } & RouteComponentProps;

function AppMenu(props: Props) {
  const classes = useStyles();
  const AppMenuTooltip = (tooltipProps: { title: string; children: ReactElement }) => {
    if (props.drawerOpened) {
      return <>{tooltipProps.children}</>;
    }
    return (
      <Tooltip title={tooltipProps.title} placement="right">
        {tooltipProps.children}
      </Tooltip>
    );
  };

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !props.drawerOpened && classes.drawerPaperClose)
      }}
      open={props.drawerOpened}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={() => props.toggleDrawer()}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <AppMenuTooltip title="Todos">
          <ListItem button onClick={() => props.history.push('/')}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Todos" />
          </ListItem>
        </AppMenuTooltip>
        <AppMenuTooltip title="Learn more">
          <ListItem button onClick={() => props.history.push('/learn-more')}>
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="Learn more" />
          </ListItem>
        </AppMenuTooltip>
      </List>
    </Drawer>
  );
}

export default withRouter(AppMenu);
