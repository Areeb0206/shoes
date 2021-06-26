import React, { useState } from 'react';
import { Redirect } from "react-router-dom";

const Login = () => {

	const [isAuth, setIsAuth] = useState(true);	

	if(!isAuth){
		return <Redirect to="/shoes" />
	}


	return(
<div className="Login">Login
    
    <div>
    <input />
<br />
    <input />
    <br />
      <button onClick={() => setIsAuth(false)}   >LOGIN</button>

    </div>
 </div>
		);
}

export default Login;