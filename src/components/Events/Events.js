import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default class Events extends Component {
  render() {
    const { event } = this.props;
    const d = new Date(event.startDate);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    return (
      <div className="col-lg-3 col-sm-6 col-12">
        <div className="card" style={{ padding: "16px" }}>
          <h6 className="title">{event.title.slice(0,20)} ..</h6>
          <span className="event_date">
            {monthNames[d.getMonth()]}
            <br />
            <span style={{ fontSize: "18px" }}>{d.getDate()}</span>
            <br />
            {d.getFullYear()}
          </span>
          <p className="description">
            <i className="fa fa-clock" /> {event.startTime}
            <br />
            <i className="fa fa-map-marked-alt" /> {event.venue}
          </p>
          <Link to="/" className="btn-more text-center">
            See More
          </Link>
        </div>
      </div>
    );
  }
}
