import React from "react";
import "./header.css";
import Navigation from '../navbar/Nav';
// import myLogo from 

//passing in props to generate Header
const Header = (props) => {
	console.log("Head props", props)
	const { currentNav, setCurrentNav } = props;
	return (
			<header id="header">
				<div id = "head-content">
					<h1>Under A-Tack</h1>
					<Navigation currentNav={currentNav} setCurrentNav={setCurrentNav} />
				</div>
			</header>
	)

}
export default Header