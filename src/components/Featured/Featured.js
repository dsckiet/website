import React, { Component } from "react";

export default class Featured extends Component {
  render() {
    // const photoUrl = process.env.REACT_APP_PHOTO_URL;
    const photoUrl = "http://dsckiet.herokuapp.com"

    return (
      <div className="featured">
        <div className="container pt-4 pb-4">
          <h5 className="title" style={{ color: "#444444" }}>
            Our Success Story
          </h5>
          <div className="col-lg-12" style={{ padding: "0" }}>
            <div className="card mt-4 p-4">
              <div className="row">
                <div className="col-md-3 col-sm-12">
                  <img
                    src={`${photoUrl}${this.props.story.image}`}
                    width="100%"
                    alt=""
                  />
                </div>
                <div className="col-md-9 col-sm-12">
                  <h5 className="title" style={{ color: "#1A73E8" }}>
                    {this.props.story.title}
                  </h5>
                  <p className="description">{this.props.story.description}</p>

                  <a href="/" className="btn btn-primary prime_btn">
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
