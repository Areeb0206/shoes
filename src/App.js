import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";

import './App.scss';

import Home from './pages/Home/Home';

import Login from './pages/Login/Login';

import Account from './pages/Account/Account';

import Contact from './pages/Contact/Contact';


import Cart from './pages/Cart/Cart';

import Nvbar from './Components/Navbar/Navbar';

import Nike from './pages/Home/Section1/Nike/Nike';




const App = () => {
  return (
   <Router>
         

      <Nvbar />











    <Switch>
         <Route exact path="/" component={Home} />

         <Route exact path="/Login" component={Login} />

         <Route exact path="/Account" component={Account} />

         <Route exact path="/Contact" component={Contact} />

         <Route exact path="/Cart" component={Cart} />


         <Route exact path="/Nike" component={Nike} />


        </Switch>




   </Router>
  );
}

export default App;
