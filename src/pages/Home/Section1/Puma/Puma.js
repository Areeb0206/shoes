import React from 'react';
import { useHistory } from "react-router-dom";
import './Puma.scss';

const Puma = () => {

let puma=useHistory();

const Back=() =>{

		puma.push('/shoes');

	}

 return(

    <div className="puma">

        <div className="header">

	      <div className="back"><button onClick={Back}></button></div>

	      <div className="logo"></div>

	      <div className="cart"></div>

    </div>


    </div>


 	);


}
export default Puma;