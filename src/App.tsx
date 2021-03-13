import React from 'react';
import Main from './components/Main';
import Country from './components/Country';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import {Container, createStyles} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import BackgroundImage from "./components/BackgroundImage/BackgroundImage";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      paddingTop: 20,
      overflowX: 'hidden',
      position: 'relative',
    },
  }),
);

const App: React.FC = () => {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <BackgroundImage />
        <Router>
          <Header />
          <Switch>
            <Route path='/country/:code'>
              <Country />
            </Route>
            <Route path='/'>
              <Main />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
  );
};

export default App;
