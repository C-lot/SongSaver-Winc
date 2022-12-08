import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/SongOverview">
          <li>Music App</li>
        </Link>
        <Link to="/About">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
