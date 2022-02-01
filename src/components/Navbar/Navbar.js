import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "../SearchForm/Search";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Movix
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={handleClick}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/trending" className="nav-links" onClick={handleClick}>
                Trending
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/watchlist" className="nav-links" onClick={handleClick}>
                WatchList
              </Link>
            </li>
            <Search/>
          </ul>
          {/* <Search/> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
