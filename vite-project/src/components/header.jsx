import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
      <h1>My Website</h1>

      <nav style={{ display: "flex", gap: "1rem" }}>
        {/* NavLink highlights active link */}
        <NavLink to="/" style={{ textDecoration: "none" }}>
          Home
        </NavLink>

        {/* Link works like NavLink but no active style */}
        <Link to="/abouts" style={{ textDecoration: "none" }}>
          About
        </Link>

        <Link to="/contacts" style={{ textDecoration: "none" }}>
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
