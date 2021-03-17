import React, { useEffect } from 'react';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BackgroundImage from './components/BackgroundImage/BackgroundImage';
import style from './App.module.scss';
import HeaderContainer from "./components/Header/HeaderContainer";
import CountryContainer from "./components/Country/CountryContainer";

import { useDispatch, useSelector } from 'react-redux';
import { auth } from './actions/userActions';
import Registration from './components/Registration';
import Login from './components/Login';

const App: React.FC = () => {
  const isAuth = useSelector((state: any) => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);

  console.log(isAuth);

  return (
    <BrowserRouter>
      <div className={style.app}>
        <BackgroundImage />
        <HeaderContainer />
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
            <CountryContainer />
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
