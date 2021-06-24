import React, { useState }from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';


const Nvbar = () => {


const [open,close]=useState(false);

  return (
 <>

  <div className="navbar">

       <div className="header">
	        <div className="logo"></div>

	        <div className="btn"><button id="btn" onClick={() => close(!open)}>Open</button></div>
	  
       </div>



      <div className="links" id={open ? "hidden" : "open"}>

			      <NavLink to="/" className="link link1" >Home			      </NavLink> 

			      <NavLink to="/Contact" className="link link2" >Contact			      </NavLink> 
			     
			      <NavLink to="/Login" className="link link3" >Login			      </NavLink> 


			      <NavLink to="/Account" className="link link5" >Account			      </NavLink> 


			      <NavLink to="/Cart" className="link link4" >Cart			      </NavLink> 



</div>

			
</div>



</>

 
  );
}

export default Nvbar;
