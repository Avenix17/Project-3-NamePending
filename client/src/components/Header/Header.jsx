import React from "react";
import "./header.css";
import Navigation from "../navbar/Nav";
import tack from "../../assets/tack.png";

//passing in props to generate Header
const Header = (props) => {
  console.log("Head props", props);
  const { currentNav, setCurrentNav, setUser } = props;
  return (
    <header id="header">
      <div id="head-content">
        <div className="tack-title">
          <h1>Under A-Tack</h1>
          <img className="tack" src={tack} alt="It's a tack!" />
        </div>
        <Navigation
          currentNav={currentNav}
          setCurrentNav={setCurrentNav}
          setUser={setUser}
        />
      </div>
    </header>
  );
};
export default Header;
