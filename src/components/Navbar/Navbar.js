import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const Container = styled.nav`
  color: ${({ theme }) => theme.text} !important;
  background-color: ${({ theme }) => theme.body};
  margin-bottom: 1.45rem;
`;

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ boxShadow: "2px 0px 6px #707070" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/" style={{ fontWeight: "600" }}>
          <img
            className="img-fluid mb-1"
            src="./assets/images/logo.png"
            alt="logo"
            width="45"
          />{" "}
          DSC KIET
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav mr-auto nav justify-content-end"
            style={{ width: "100%" }}
          >
            <li className="nav-item m-1 " style={{ fontWeight: "600" }}>
              <NavLink
                to="/"
                exact
                className="nav-link"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item m-1" style={{ fontWeight: "600" }}>
              <NavLink
                to="/events"
                className="nav-link"
                activeClassName="active"
              >
                Events
              </NavLink>
            </li>
            <li className="nav-item m-1" style={{ fontWeight: "600" }}>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/leaderboard"
              >
                Leaderboard
              </NavLink>
            </li>
            <li className="nav-item m-1" style={{ fontWeight: "600" }}>
              <NavLink className="nav-link" activeClassName="active" to="/team">
                Team
              </NavLink>
            </li>
            <li className="nav-item m-1" style={{ fontWeight: "600" }}>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item m-1" style={{ fontWeight: "600" }}>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/ideas"
              >
                Ideas
              </NavLink>
            </li>
            <li className="nav-item m-1" style={{ fontWeight: "600" }}>
              <Link className="nav-link" smooth="true" to="/#contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Navbar.propTypes = {
//   theme: string.isRequired,
//   toggleTheme: func.isRequired,
// };

export default Navbar;
