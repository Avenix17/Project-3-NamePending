import React from "react";
import './Login.css'

function Login() {
return(
<div className="flex">
	<h1>Signup or Login</h1>
	<form>
		<label>
			<p>Username:</p>
			<input type="text" />
		</label>
		<label>
			<p>Password:</p>	
			<input type="password" />
		</label>
		<div className="buttons">
		<button type="submit">Login</button>
		<p>Or</p>
		<button type="submit">Create User.</button>
		</div>
	</form>
</div>	
	)	
}

export default Login;