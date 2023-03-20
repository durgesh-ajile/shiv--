import Link from "next/link";
import React, { useState } from "react";
import { Blog, Home, Pages, Room } from "./Menu";

const MobileHeader = ({ closeMobileHeader }) => {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" },
    activeIcon = (value) => (value === activeMenu ? "open" : "");
  return (
    <div className="mobile-menu">
      <div className="menu-backdrop" />
      <div className="close-btn" onClick={() => closeMobileHeader()}>
        <i className="icon far fa-times" />
      </div>
      <nav className="menu-box">
        <div className="nav-logo">
          <Link href="/">
            <a>
              <img src="https://lh5.googleusercontent.com/p/AF1QipOodfsaUzJn_6fOnrfXtX7phjw9dSFci8laNclY" alt="" title="" />
            </a>
          </Link>
        </div>
        <div className="menu-outer">
          {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
          <div className="collapse navbar-collapse show clearfix">
            <ul className="navigation">
              <li >
                <Link href="/">
                  <a>Home</a>
                </Link>
                <ul style={activeLi("Home")}>
                  <Home />
                </ul>
              </li>
              <li>
                <Link href="#about">About Us </Link>
              </li>
              <li>
                <a href="#room">Rooms</a>
                <ul style={activeLi("Rooms")}>
                  <Room />
                </ul>
                
              </li>
              
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default MobileHeader;
