import React from 'react';


import { useHistory } from "react-router-dom";


import Nike from './Nike/Nike';

import Puma from './Puma/Puma';

import Adidas from './Adidas/Adidas';



const Section1 = () => {

	let history=useHistory();


 return(
 <div className="Section1">

    <div className="nike">

    <button onClick={() =>{ history.push('/Nike')}}>Nike</button>


    </div>


  

    
</div>
 	);


}
export default Section1;