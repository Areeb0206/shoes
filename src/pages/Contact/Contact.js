import React from 'react';



const Contact = (props) => {

	return(
<div className="Contact">Contact


   <button onClick={ () => {

   	props.history.push('/shoes');


   }}  >About</button>

</div>
		);
}

export default Contact;