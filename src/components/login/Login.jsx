import React from "react";
import '/login.css'

const Login = (props) => {
return(
<div className="flex">
	<h1>Please Log in</h1>
	<form>
		<label>
			<p>Usernamer:</p>
			<input type="text" />
		</label>
		<label>
			<p>Password:</p>	
			<input type="password" />
		</label>
		<div>
			<button type="submit">Submit</button>
		</div>
	</form>
</div>	
	)	
}

export default Login();