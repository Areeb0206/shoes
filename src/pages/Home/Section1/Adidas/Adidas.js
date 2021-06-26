import React from 'react';
import { useHistory } from "react-router-dom";
import './Adidas.scss';

const Adidas = () => {

let adidas=useHistory();

const Back=() =>{

		adidas.push('/shoes');

	}

 return(

    <div className="adidas">

        <div className="header">

	      <div className="back"><button onClick={Back}></button></div>

	      <div className="logo"></div>

	      <div className="cart"></div>

    </div>


    </div>


 	);


}
export default Adidas;