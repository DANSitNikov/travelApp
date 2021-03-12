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

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      paddingTop: 20,
      paddingBottom: 20,
      minHeight: '100vh',
    },
  }),
);

const App: React.FC = () => {
  const classes = useStyles();

  return (
      <Container maxWidth="lg" className={classes.root}>
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
      </Container>
  );
};

export default App;
