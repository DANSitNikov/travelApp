import React from 'react';
import Main from './components/Main';
import Country from './components/Country';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='App'>
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
