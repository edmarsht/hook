import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";
import logo from "../../assets/logo.svg";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#whathook">Hook ? </a>
    </p>
    <p>
      <a href="#home">Open</a>
    </p>
    <p>
      <a href="#home">Case</a>
    </p>
    <p>
      <a href="#home">Library</a>
    </p>
  </>
);

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="hook__navbar">
      <div className="hook__navbar-links">
        <div className="hook__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="hook__navbar-links_container">
          <Menu />
        </div>
      </div>

      <div className="hook__navbar-sign">
        <p>Sign in</p>
        <button className="button-53" type="button">Sign up</button>
      </div>
      <div className="hook__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="hook__navbar-menu_container scale-up-center">
            <div className="hook__navbar-menu-container-links">
              <Menu />
              <div className="hook__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
