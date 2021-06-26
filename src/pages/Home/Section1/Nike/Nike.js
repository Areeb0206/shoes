import React from 'react';
import { useHistory } from "react-router-dom";
import './Nike.scss';

const Nike = () => {

let nike=useHistory();

const Back=() =>{

		nike.push('/shoes');

	}

 return(

    <div className="nike">

        <div className="header">

	      <div className="back"><button onClick={Back}></button></div>

	      <div className="logo"></div>

	      <div className="cart"></div>

    </div>


    </div>


 	);


}
export default Nike;