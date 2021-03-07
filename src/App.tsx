import React from 'react';
import Main from './components/Main'
import Country from './components/Country'
import Header from './components/Header'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
    <Header/>
    <Switch>
      <Route path="/country/:code">
        <Country/>
      </Route>
      <Route path="/">
        <Main/>
      </Route>
    </Switch>
    <Footer/>
    </Router>
  );
}

export default App;
