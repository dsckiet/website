import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./homepage.module.css";
import ItemsCarousel from "react-items-carousel";
import { useDarkMode } from "./../../hooks/useDarkMode";

const Homepage = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <div className="fluid-container">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6"
            style={{
              fontSize: "35px",
              fontWeight: "700",
              padding: "150px 60px 80px 80px",
            }}
          >
            Developer Student Clubs
            <br />
            KIET Group of Institutions <br />
            <span
              style={{ fontSize: "23px", fontWeight: "400", color: "grey" }}
            >
              powered by Google Developers
            </span>
            <a
              href="https://bit.ly/getting-started-with-cp"
              className="btn btn-primary prime_btn mt-2"
              target="_blank"
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#f1f1f1",
                background: "#4285f4",
                padding: "8px 16px",
                border: "0",
                transition: "0.3s all ease",
                boxShadow:
                  "0px 3px 6px rgba(0, 0, 0, 0.16), 0px 2px 4px rgba(0, 0, 0, 0.23)",
              }}
              rel="noopener noreferrer"
            >
              Become a member
            </a>
          </div>
          <div className="col-lg-6" style={{ padding: "80px" }}>
            <img
              className="img-fluid"
              src="./assets/images/side.gif"
              alt="side"
              width="100%"
            />
          </div>
        </div>
      </div>
      <div className="about_section" style={{ background: "#f1f1f1" }}>
        <div className="container">
          <div className="row pt-5 pb-4">
            <div className="col-lg-4 col-sm-12">
              <h4
                className="title"
                style={{
                  fontSize: "23px",
                  fontWeight: "700",
                  color: "#333333",
                }}
              >
                What we do?
              </h4>
              <p className="description" style={{ color: "#333333" }}>
                A Developer Student Clubs is a Google recognised student body at
                a college which directly reports to Google for their activities
                and is supported by the tech giant.
                <br />
                <br />A DSC conducts workshops, seminars and other fun
                activities which help the students connect with Google.
              </p>

              <a
                href="https://developers.google.com/programs/dsc/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary prime_btn mb-4"
                style={{
                  marginBottom: "16px",
                  marginRight: "16px",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#f1f1f1",
                  background: "#4285f4",
                  padding: "8px 16px",
                  border: "0",
                  transition: "0.3s all ease",
                  boxShadow:
                    "0px 3px 6px rgba(0, 0, 0, 0.16), 0px 2px 4px rgba(0, 0, 0, 0.23)",
                }}
              >
                Learn More
              </a>
            </div>
            <div className="col-lg-8 col-sm-12 mt-4">
              <div className="row text-center">
                <div className="col-lg-3 col-sm-6 col-6">
                  <i
                    className="fa fa-comment-alt description"
                    style={{ fontSize: "40px", color: "#4285F4" }}
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
                    style={{ fontSize: "40px", color: "#DB4437" }}
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
                    style={{ fontSize: "40px", color: "#F4B400" }}
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
                    style={{ fontSize: "40px", color: "#0F9D58" }}
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
      <div className="about_kiet pt-3" style={{ background: "#4c4a78" }}>
        <div className="container pt-4 pb-4">
          <div className="row">
            <div className="col-md-9 col-sm-12">
              <h5
                className="title"
                style={{
                  fontSize: "23px",
                  fontWeight: "700",
                  color: "#fff",
                }}
              >
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
      <div className="about_kiet">
        <div className="container pt-4 pb-4">
          <h5
            className="title"
            style={{
              fontSize: "23px",
              fontWeight: "700",
            }}
          >
            Our Glimpses
          </h5>
          <div className="col-lg-12 mt-4 mb-4" style={{ padding: "0" }}>
            <div style={{ padding: `0 ${chevronWidth}px` }}>
              <ItemsCarousel
                infinitLoop
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={2}
                gutter={20}
                leftChevron={<button>{"<"}</button>}
                rightChevron={<button>{">"}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
              >
                <div style={{ height: 200, background: "#EEE" }}>
                  First card
                </div>
                <div style={{ height: 200, background: "#EEE" }}>
                  Second card
                </div>
                <div style={{ height: 200, background: "#EEE" }}>
                  Third card
                </div>
                <div style={{ height: 200, background: "#EEE" }}>
                  Fourth card
                </div>
              </ItemsCarousel>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-4 mb-4">
          <div className="col-lg-6">
            <p
              style={{
                fontSize: "23px",
                fontWeight: "700",
              }}
            >
              Join the Conversation
            </p>
            <p style={{ padding: "50px 0px 50px 0px" }}>
              Join our Channels to know more about the Activities, Sessions and
              other fun stuff.
            </p>
            <div className="row">
              <div className="col">
                <button className={`btn btn-primary ${styles.joinbtn}`}>
                  Join us on{" "}
                  <span>
                    <img
                      className="img-fluid"
                      src="./assets/images/slack-2.svg"
                      alt="slack"
                      width="55"
                    />
                  </span>
                </button>
              </div>
              <div className="col">
                <button className={`btn btn-primary ${styles.joinbtn}`}>
                  Join us on{" "}
                  <span>
                    <img
                      className="img-fluid"
                      src="./assets/images/telegram.svg"
                      alt="slack"
                      width="90"
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6" style={{ padding: "80px" }}>
            Illustration Here
          </div>
        </div>
      </div>
      <div className="container  mt-4 mb-4">
        <div className="row">
          <div className="col-lg-6" style={{ padding: "80px" }}>
            Tech Stack Illustration Here
          </div>
          <div className="col-lg-6">
            <p
              style={{
                fontSize: "23px",
                fontWeight: "700",
              }}
            >
              Tech Stack
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
