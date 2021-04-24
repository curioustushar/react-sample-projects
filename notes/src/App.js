import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './layouts/Home';
import { Labels } from './layouts/Labels';
import { Reminders } from './layouts/Reminders';
import { Favorites } from './layouts/Favorites';

import { Navbar } from './components/Navbar';
import { NavigationDrawer } from './components/NavigationDrawer';
import 'firebase/firestore';
import { FirebaseAppProvider } from 'reactfire';
import { Provider } from 'react-redux';
import { store } from './store';
import ThemeContextProvider from './ThemeContextProvider';
import { firebaseConfig } from './config';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <ThemeContextProvider>
        <Provider store={store}>
          <Router>
            <div className={classes.root}>
              <CssBaseline />
              <Navbar />
              <NavigationDrawer />

              <main className={classes.content}>
                <div className={classes.toolbar} />
                <Box p={2}>
                  <Switch>
                    <Route exact path="/">
                      <Home />
                    </Route>
                    <Route exact path="/reminders">
                      <Reminders />
                    </Route>
                    <Route exact path="/labels">
                      <Labels />
                    </Route>
                    <Route exact path="/favorites">
                      <Favorites />
                    </Route>
                  </Switch>
                </Box>
              </main>
            </div>
          </Router>
        </Provider>
      </ThemeContextProvider>
    </FirebaseAppProvider>
  );
}
