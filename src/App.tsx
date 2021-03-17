import React, { useEffect } from 'react';
import Main from './components/Main';
import Country from './components/Country';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BackgroundImage from './components/BackgroundImage/BackgroundImage';
import style from './App.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { auth } from './actions/userActions';
import Registration from './components/Registration';
import Login from './components/Login';

const App: React.FC = () => {
  const isAuth = useSelector((state: any) => state.user.isAuth);
  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(auth());
  }, []);

  return (
    <BrowserRouter>
      <div className={style.app}>
        <BackgroundImage />
        <Header />
        <Switch>
          {!isAuth && (
            <Route path='/registration'>
              <Registration />
            </Route>
          )}
          {!isAuth && (
            <Route path='/login'>
              <Login />
            </Route>
          )}
          <Route path='/country/:code'>
            <Country />
          </Route>
          <Route path='/'>
            <Main />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
