import React from "react";

//passing in props to generate the footer to the HTML
function Footer (props) {
	console.log("Footer Props", props)
	return (
		<footer>
			<p>{`${props.version}By:Us`}</p>
			<p> By: Avyrie Fellows GitHub: Avenix17, Bryson Benson GitHub: Firm-Tofu10, Ciara Gaunt GitHub: , Kate Patch GitHub: Katepatch , Khoi Vu GitHub: ChefKhoiRD, Micah Culverhouse GitHub: HolyMicah </p>
		</footer> 
	)

}

export default Footer