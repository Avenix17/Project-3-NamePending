import React from "react";
import "./footer.css";
//passing in props to generate the footer to the HTML
const Footer = (props) => {
	console.log("Footer Props", props)
	return (
		<footer id = "footer">
			<div id = "footer-content">
				<div id= "footer-title-container">
					
					<h2 id= "footer-title">The Team</h2>
					
					<div id = "footer-items">
					<a href="https://github.com/Firm-Tofu10"><button id="name-buttons">Bryson </button></a>
					<a href="https://github.com/katepatch"><button id="name-buttons">Kate </button></a>
					<a href="https://github.com/ChefKhoiRD"><button id="name-buttons">Khoi </button></a>
					<a href="https://github.com/HolyMicah"><button id="name-buttons">Micah </button></a>
					<a href="https://github.com/Avenix17"><button id="name-buttons">Avyrie </button></a>
					<a href="https://github.com/ciaragauntt"><button id="name-buttons">Ciara </button></a>
					
					</div>
				</div>
			</div>
		</footer> 
	)

	}

export default Footer