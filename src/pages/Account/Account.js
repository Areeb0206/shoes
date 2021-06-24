import React, { useState } from 'react';
import { Redirect } from "react-router-dom";

const Account = () => {

	const [isAuth, setIsAuth] = useState(true);	

	if(!isAuth){
		return <Redirect to="/Login" />
	}

	return(
<div className="Account">Account

  <button onClick={() => setIsAuth(false)}   >LOGOUT</button>



</div>
		);
}

export default Account;