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
import BackgroundImage from "./components/BackgroundImage/BackgroundImage";
import style from './App.module.scss';

const App: React.FC = () => {
  return (
      <div className={style.app}>
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
