import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { ThemeContext } from './../ThemeContextProvider';

// Icons
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import GitHubIcon from '@material-ui/icons/GitHub';

import { useSelector, useDispatch } from 'react-redux';
import { toggleViewState, toggleDrawer } from './../store/actions';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const { viewStyle } = useSelector((state) => state);
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => dispatch(toggleDrawer())}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Link to="/" className={classes.title}>
          <Typography variant="h6" noWrap>
            Notes
          </Typography>
        </Link>
        <IconButton color="inherit" onClick={() => dispatch(toggleViewState())}>
          {viewStyle === 'grid' ? <ViewModuleIcon /> : <ViewAgendaIcon />}
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="toggle theme"
          onClick={toggleTheme}
        >
          {isDark ? <WbSunnyIcon /> : <Brightness2Icon />}
        </IconButton>
        <IconButton color="inherit" aria-label="github" target="_blank" href="https://github.com/curioustushar/react-sample-projects/blob/master/notes">
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
