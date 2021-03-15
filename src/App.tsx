import React from 'react';
import Main from './components/Main';
import Country from './components/Country';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import BackgroundImage from "./components/BackgroundImage/BackgroundImage";
import style from './App.module.scss';
import HeaderContainer from "./components/Header/HeaderContainer";
import CountryContainer from "./components/Country/CountryContainer";

const App: React.FC = () => {
  return (
      <div className={style.app}>
        <BackgroundImage />
        <Router>
          <HeaderContainer />
          <Switch>
            <Route path='/country/:code'>
              <CountryContainer />
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
