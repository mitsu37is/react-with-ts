import * as React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.svg";

const Header: React.SFC = () => {
  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="logo" />
      <h1 className="header-title">React Shop</h1>
      <nav>
        <NavLink
          className="header-link"
          to="/products"
          activeClassName="header-link-active"
        >
          Products
        </NavLink>
        <NavLink
          className="header-link"
          to="/admin"
          activeClassName="header-link-active"
        >
          Admin
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
