import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
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
            <i className="fa fa-bars" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto nav justify-content-end custom_nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  exact
                  className="nav-link"
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/events"
                  className="nav-link"
                  activeClassName="active"
                >
                  Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/team"
                >
                  Team
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link" smooth to="/#contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
