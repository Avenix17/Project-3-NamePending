import React from "react";
import "./header.css";
import Navigation from '../navbar/Nav';
// import myLogo from 

//passing in props to generate Header
const Header = (props) => {
	console.log("Head props", props)
	return (
		<div id = "header">
			<header>
				<div id = "head-content">
					<h1>Under a-Tack</h1>
					<Navigation />
				</div>
			</header>
		</div>
	)

}
export default Header