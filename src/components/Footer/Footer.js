import React from "react";

//passing in props to generate the footer to the HTML
function Footer (props) {
	console.log("Footer Props", props)
	return (
		<footer>
			<p>{`${props.version}By:Us`}</p>
		</footer> 
	)

}

export default Footer