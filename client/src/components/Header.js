import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const signOut = () => {
    window.localStorage.removeItem("token");
  };

  return (
    <div className="header">
      <Link to="/" className="title">
        Bubble Colors App
      </Link>
      <nav className="nav-links">
        <Link className="nav-link" to="/">
          Login
        </Link>
        <Link className="nav-link" to="/BubblePage">
          Colors
        </Link>
        <Link className="nav-link" to="/" onClick={signOut}>
          Sign out
        </Link>
      </nav>
    </div>
  );
};

export default Header;
