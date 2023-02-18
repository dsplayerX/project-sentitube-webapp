import { click } from "@testing-library/user-event/dist/click";
import React, {useState} from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from './2ng.png';

function NavBar() {
  const[click,setClick]= useState(false);
  return (
    <nav className="nav">
      
      <Link to="/" className="site-logo">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      

      <div className="menu-icon" >
        <h1>aa</h1>
      </div>
      <div className="div_link" >
      <ul className="nav_link">
        <li>
          <CustomLink to="/">Home</CustomLink>
        </li>
        <li>
          <CustomLink to="/TryItOut">TryItOut</CustomLink>
        </li>
        <li>
          <CustomLink to="/Contact">Contact</CustomLink>
        </li>
        <li>
          <CustomLink to="/About">About</CustomLink>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default NavBar;

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
