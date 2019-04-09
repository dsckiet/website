import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Featured from "../Featured/Featured";

export default class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="fluid-container" style={{ paddingBottom: "0" }}>
          <div className="container ">
            <h2 className="title mt-4">
              About us
              <hr />
            </h2>
            <div className="row pb-5">
              <div className="col-lg-4 col-md-4 col-sm-12 pt-5">
                <img
                  className="logo"
                  src="../assets/images/dsc.png"
                  width="100%"
                  alt="developer-student-clubs-kiet"
                />
                <h5 className="title text-center">
                  KIET Group of Institutions
                </h5>
              </div>
              <div className="col-lg-8 col-sm-12 col-md-8 pt-4">
                <p className="description" style={{ color: "#444444" }}>
                  Developer Student Club KIET is inspired by Google Developers
                  Family. We started our journey in Feb 2019. We try to engage
                  student developers through our hack events, codelabs and
                  meetups. The motive is to create a local ecosystem of
                  programmers & hackers in and around the Campus. The technology
                  awareness is main goal for first few years of the group.
                </p>

                <p className="description">
                  Google collaborates with university students who are
                  passionate about growing developer communities and support
                  them with starting student clubs on their campuses.
                  <br />
                  DSC KIET is the official Google recognised student clubs at
                  KIET.
                </p>

                <a href="http://dsckiet.herokuapp.com/" className = "btn btn-primary prime_btn" >
                  Become A Member
                </a>
              </div>
            </div>
          </div>

          <div className="about_section">
            <div className="container pt-4 pb-4">
              <h4 className="title">Opportunities with us</h4>
              <br />
              <div className="custom_nav">
                <li>
                  Grow your knowledge on developer technologies and more through
                  peer to peer workshops and events.
                </li>

                <br />

                <li>
                  Gain relevant industry experience by solving problems for
                  local organizations with technology based solutions.
                </li>

                <br />

                <li>
                  Showcase your prototypes and solutions to your local community
                  and industry leaders.
                </li>
              </div>
            </div>
          </div>
          <div className="about_kiet">
            <div className="container pt-4 pb-4">
              <div className="row">
                <div className="col-md-9 col-sm-12">
                  <h5 className="title" style={{ color: "#fff" }}>
                    Our Toolkit & Focus
                  </h5>
                  <div className="row mt-4">
                    <div className="col-sm-2">
                      <div className="card text-center p-2">Web</div>
                    </div>

                    <div className="col-sm-2">
                      <div className="card text-center p-2">Android</div>
                    </div>

                    <div className="col-sm-2">
                      <div className="card text-center p-2">Cloud</div>
                    </div>

                    <div className="col-sm-2">
                      <div className="card text-center p-2">ML/AI</div>
                    </div>

                    <div className="col-sm-2">
                      <div className="card text-center p-2">Adobe XD</div>
                    </div>

                    <div className="col-sm-2">
                      <div className="card text-center p-2">Flutter</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12 pt-4">
                  <img src="../assets/images/tech.png" width="100%" alt="" />
                </div>
              </div>
            </div>
          </div>
          <Featured story={this.props.story} />
          <Footer />
        </div>
      </div>
    );
  }
}
