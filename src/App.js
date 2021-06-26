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


import Nvbar from './Components/Navbar/Navbar';

import Cart from './pages/Cart/Cart';





const App = () => {
  return (
   <Router>
         

     



    <Switch>

         <Route exact path="/Login" component={Login} />

         <Route exact path="/Account" component={Account} />

         <Route exact path="/Contact" component={Contact} />

         <Route exact path="/Cart" component={Cart} />




           <Route exact path="/" component={Home} />


        </Switch>




   </Router>
  );
}

export default App;
