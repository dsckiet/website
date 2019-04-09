import React, { Component } from "react";
// import { HashLink as Link } from "react-router-hash-link";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="contactus">
          <div className="container pt-4 pb-4">
            <div className="row">
              <div className="col-md-3 mb-4">
                <h5 className="title" style={{ color: "#444444" }}>
                  About
                </h5>
                <li>
                  <a
                    href="http://kiet.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    KIET Group of Institutions
                  </a>
                </li>
                <li>
                  <a
                    href="https://developers.google.com/programs/dsc/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Developer Student Clubs
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                  >
                    DSC KIET
                  </a>
                </li>
                <li>
                  <a
                    href="http://dsckiet.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Become A Member
                  </a>
                </li>
              </div>

              <div className="col-md-3 mb-4">
                <h5 className="title" style={{ color: "#444444" }}>
                  Resources
                </h5>
                <li>
                  <a
                    href="http://github.com/dsckiet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/dsckiet
                  </a>
                </li>
                <li>Call for a Speaker</li>
                <li>Become a Sponsor</li>
              </div>

              <div className="col-md-3 mb-4">
                <h5 className="title" style={{ color: "#444444" }}>
                  Contact
                </h5>
                <li>
                  <a
                    href="mailto:dsckiet@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    dsckiet@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="http://medium.com/@dsckiet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    medium.com/@dsckiet
                  </a>
                </li>
                <li>
                  <a
                    href="http://facebook.com/dsckiet/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    fb.me/dsckiet
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>

        <div
          id="contact"
          className="text-center"
          style={{
            color: "#fff",
            fontSize: "14px",
            padding: "8px",
            background: "#4C4A78"
          }}
        >
          <p style={{ margin: "0", padding: "0" }}>
            Designed and Developed by DSC KIET
          </p>
        </div>
      </div>
    );
  }
}
