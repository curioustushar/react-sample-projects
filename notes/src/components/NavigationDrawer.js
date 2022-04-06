import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import LabelIcon from '@material-ui/icons/Label';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AlarmIcon from '@material-ui/icons/Alarm';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(8) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    itemlink: {
      display: 'flex',
      '&.active': {
        backgroundColor: theme.palette.background.default,
      },
    },
  };
});

//TODO: change this edit label icon
const NavigationLinks = [
  { icon: <AssignmentIcon />, label: 'Notes', path: '/' },
  // { icon: <LabelIcon />, label: 'Edit Labels', path: '/labels' },
  { icon: <AlarmIcon />, label: 'Reminders', path: '/reminders' },
  { icon: <FavoriteIcon />, label: 'Favorites', path: '/favorites' },
];

export const NavigationDrawer = () => {
  const showDrawer = useSelector((state) => state.showDrawer);
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: showDrawer,
        [classes.drawerClose]: !showDrawer,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: showDrawer,
          [classes.drawerClose]: !showDrawer,
        }),
      }}
    >
      <div className={classes.drawerContainer}>
        <div className={classes.toolbar} />

        <List>
          {NavigationLinks.map((link, index) => (
            <NavLink
              exact={'true'}
              key={link.label}
              to={link.path}
              className={classes.itemlink}
            >
              <ListItem button>
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText primary={link.label} />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default NavigationDrawer;
