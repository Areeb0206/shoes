const Contact = (props) => {

	return(
<div className="Contact">Contact


   <button onClick={ () => {

   	props.history.push('/');


   }}  >About</button>

</div>
		);
}

export default Contact;