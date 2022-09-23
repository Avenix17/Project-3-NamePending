import React from "react";

function Footer (props) {
	console.log("Footer Props", props)
	return (
		<footer>
			<p>{`${props.version}By:Us`}</p>
		</footer> 
	)

}

export default Footer