import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ isAuth }) {
  return (
    <nav>
      <Link to="/">home</Link>
      <Link to="/createpost">post</Link>
      {!isAuth ? (
        <Link to="/login">Login</Link>
      ) : (
        <Link to="/logout">Logout</Link>
      )}
    </nav>
  );
}

export default Navbar;
