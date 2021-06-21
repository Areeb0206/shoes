import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar } from 'react-bootstrap';
import './Navbar.scss';


const Nvbar = () => {


// const [open,close]=useState(false);

  return (
 
  /*{<div className="links" id={open ? "hidden" : ""}>

			      <NavLink to="/" className="link" >Home			      </NavLink> 

			      <NavLink to="/Contact" className="link" >Contact			      </NavLink> 
			     
			      <NavLink to="/Login" className="link" >Login			      </NavLink> 


			  </div>

			 <div className="btn"><button onClick={() => close(!open)}>Open</button></div>




}*/
   

           

			 <Navbar collapseOnSelect expand="lg" className="navbar">
		   
            <div className="left">

			  <Navbar.Brand href="/" className="logo"></Navbar.Brand></div>
    

             <Navbar.Toggle className="menu">menu</Navbar.Toggle>

		 
			    
			   
			       

			       <Navbar.Collapse className="links">
			   
			  
			     <NavLink to="/" className="link link1" >Home			      </NavLink> 

			      <NavLink to="/Contact" className="link link2" >Contact			      </NavLink> 
			     
			      <NavLink to="/Login" className="link link3" >Login			      </NavLink> 

			  
			  </Navbar.Collapse>
			
			</Navbar>
 
    
     

 
  );
}

export default Nvbar;
