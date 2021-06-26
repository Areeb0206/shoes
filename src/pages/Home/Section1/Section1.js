import React from 'react';


import { useHistory } from "react-router-dom";




import './Section1.scss'


const Section1 = () => {

	let nike=useHistory();



 return(
 <div className="section1">

   <div className="in-sec1">

     <div className="heading">Choose brands</div>






<div className="slide">
     <div className="nike">

    <button onClick={() =>{ nike.push('/Nike')}}>Nike</button>


    </div>




     

</div>
        
      
 
</div>
  

    
</div>
 	);


}
export default Section1;