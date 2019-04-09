import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Events from "../Events/Events";
import Featured from "../Featured/Featured";
import sortBy from "sort-by";

export default class Static extends Component {
  render() {
    const { story, events } = this.props;
    events.sort(sortBy("-startDate"));

    return (
      <div className="fluid-container" style={{ paddingBottom: "0" }}>
        <div className="container">
          <div className="row pb-5">
            <div className="col-lg-4 col-md-4 col-sm-12 pt-4">
              <img
                className="logo"
                src="./assets/images/front_illustration.png"
                width="100%"
                alt="developer-student-clubs-kiet"
              />
            </div>
            <div className="col-lg-8 col-sm-12 col-md-8 pt-5">
              <h1 className="title main__title">
                Make good things <span className="highlight">together</span>.
              </h1>
              <h3 className="title club_title">Developer Student Clubs KIET</h3>
              <p className="description">
                Developer Student Clubs KIET powered by Google Developers is an
                initiative to concentrate the efforts of many developers in and
                around campus to learn, share and get productive using the
                various cutting-edge technologies.
              </p>

              <a className = "btn btn-primary prime_btn"
              href = "http://dsckiet.herokuapp.com/"
              target = "_blank"
              rel = "noopener noreferrer">
                Become A Member
              </a>
              <Link
                to="/solution-challenge"
                className="btn btn-outline-info sec_btn"
              >
                DSC Solution Challenge
              </Link>
            </div>
          </div>
        </div>

        <div className="about_section">
          <div className="container">
            <div className="row pt-4 pb-4">
              <div className="col-lg-4 col-sm-12">
                <h4 className="title" style={{ color: "#333333" }}>
                  What we do?
                </h4>
                <p className="description" style={{ color: "#333333" }}>
                  A Developer Student Clubs is a Google recognised student body
                  at a college which directly reports to Google for their
                  activities and is supported by the tech giant.
                  <br />
                  <br />A DSC conducts workshops, seminars and other fun
                  activities which help the students connect with Google.
                </p>

                <a href = "https://developers.google.com/programs/dsc/"
                  target = "_blank"
                  rel = "noopener noreferrer"
                  className = "btn btn-primary prime_btn mb-4" >
                  Learn More
                </a>
              </div>

              <div className="col-lg-8 col-sm-12">
                <div
                  className="row text-center"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <div className="col-lg-3 col-sm-6 col-6">
                    <i
                      className="fa fa-comment-alt description"
                      style={{ fontSize: "40px" }}
                    />
                    <br />
                    <br />
                    <h5 className="title">Talks</h5>
                    <p className="description">
                      Get updated with the latest news and announcements
                    </p>
                  </div>

                  <div className="col-lg-3 col-sm-6 col-6">
                    <i
                      className="fa fa-code description"
                      style={{ fontSize: "40px" }}
                    />
                    <br />
                    <br />
                    <h5 className="title">Codelabs</h5>
                    <p className="description">
                      Get hands-on experience and guidance from the community
                      members
                    </p>
                  </div>

                  <div className="col-lg-3 col-sm-6 col-6">
                    <i
                      className="fa fa-users-cog description"
                      style={{ fontSize: "40px" }}
                    />
                    <br />
                    <br />
                    <h5 className="title">Projects</h5>
                    <p className="description">
                      We make projects that help individuals to learn more.
                    </p>
                  </div>

                  <div className="col-lg-3 col-sm-6 col-6">
                    <i
                      className="fa fa-handshake description"
                      style={{ fontSize: "40px" }}
                    />
                    <br />
                    <br />
                    <h5 className="title">Meetups</h5>
                    <p className="description">
                      We love to discuss on open innovations to create something
                      big
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about_kiet">
          <div className="container pt-4 pb-4">
            <div className="row">
              <div className="col-md-9 col-sm-12">
                <h5 className="title" style={{ color: "#fff" }}>
                  About DSC KIET
                </h5>
                <p className="description" style={{ color: "#fff" }}>
                  Developer Student Club KIET is inspired by Google Developers
                  Family. We started our journey in Feb 2019. We try to engage
                  student developers through our hack events, codelabs and
                  meetups. The motive is to create a local ecosystem of
                  programmers & hackers in and around the Campus. The technology
                  awareness is main goal for first few years of the group.
                </p>
                <a
                  href="http://facebook.com/dsckiet/"
                  className="btn btn-outline-dark custom_btn"
                >
                  Facebook Page
                </a>
                <a
                  href="https://github.com/dsckiet"
                  className="btn btn-outline-dark sec_btn custom_btn"
                  style={{ background: "#fff", color: "#4C4A78" }}
                  target="__blank"
                  rel="noopener noreferer"
                >
                  GitHub Handle
                </a>
                <br />
                <br />
                <Link to="/about" style={{ color: "#fff", fontSize: "14px" }}>
                  See More about DSC KIET
                </Link>
              </div>
              <div className="col-md-3 col-sm-12">
                <img src="./assets/images/team.png" width="100%" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="events">
          <div className="container pt-4 pb-4">
            <div className="section_header text-center">
              <h5 className="title" style={{ color: "#444444" }}>
                Our Events and Meetups
              </h5>
              <p className="description">
                At sessions that span from the technical to the visionary, let’s
                celebrate and discover what the technologies can enable: how
                product innovation, open source, and ML and AI can propel
                enterprises forward and solve the big problems that impact all
                of us. We are highly committed to deliver with the best.
              </p>
              <Link to="/events" style={{ fontSize: "14px" }}>
                See More
              </Link>
            </div>
            <br />
            <div className="row">
              {events.map(event =>
                event.status === 1 ? (
                  <Events key={event._id} event={event} />
                ) : null
              )}
            </div>
          </div>
        </div>

        <Featured story={story} />

        <div className="partners">
          <div className="container pt-4 pb-4">
            <h5 className="title" style={{ color: "#444444" }}>
              Our Partners
            </h5>
            <p className="description">
              A very big thank you to our partners for their continued
              partnership. If you’re interested in being showcased throughout
              DSC KIET, contact dsckiet@gmail.com to discuss sponsorship
              opportunities.
            </p>

            <h6 className="title" style={{ fontSize: "14px" }}>
              General Partners
            </h6>

            <div className="row p-3" style={{ display: "flex" }}>

              <div className="card pt-2 pb-2" style={{ marginRight: "16px" }}>
                <img
                  src="./assets/images/logo.png"
                  style={{ maxHeight: "60px" }}
                  height="100%"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <hr />
      </div>
    );
  }
}
