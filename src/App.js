import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";

import './App.scss';

import Home from './pages/Home/Home';

import Contact from './pages/Contact/Contact';

import Login from './pages/Login/Login';

import Navbar from './Components/Navbar/Navbar';
const App = () => {
  return (
   <Router>
   <Navbar />
    <Switch>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>


        </Switch>
   </Router>
  );
}

export default App;
