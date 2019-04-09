import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Member from "../Member/Member";
import * as websiteApi from "./../../utils/websiteApi";

export default class TeamPage extends Component {
  state = {
    message: "",
    profiles: []
  };

  componentDidMount() {
    websiteApi.getTeam().then(res => {
      this.setState({ message: res.message, profiles: res.team });
    });
  }

  render() {
    const { profiles } = this.state;

    return (
      <div>
        <Navbar />
        <div className="container">
            <h2 className="title mt-4">
                Our Team
            </h2>
            <p className="description">
                We have a community of 120+ members managed by a team of highly motivated and talented developers, designers and influencers.
            </p>
        </div>
        <div className="about_kiet">
          <div className="container pt-4 pb-4">
            <h5 className="title" style={{ color: "white" }}>
              Core Team
            </h5>
            <br />
            <div className="row">
              {profiles.map(profile =>
                profile.status === 1 ? (
                  <Member key={profile._id} profile={profile} />
                ) : null
              )}
            </div>
            <br />
            <h5 className="title" style={{ color: "white" }}>
              Active Community Members
            </h5>
            <br />
            <div className="row">
              {profiles.map(profile =>
                profile.status === 2 ? (
                  <Member key={profile._id} profile={profile} />
                ) : null
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
