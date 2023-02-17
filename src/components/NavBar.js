import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from './sentitube-icon.jpg';

function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-logo">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      
      <ul>
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
