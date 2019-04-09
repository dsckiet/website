import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default class SolutionChallenge extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
            <h2 className="title mt-4 mb-4">
                Google DSC Solution Challenge 2019
            </h2>
        </div>
        <div class="about_kiet">
          <div class="container pt-4 pb-4">
            <div class="row">
              <img
                src="../assets/images/illustration.svg"
                style={{ position: "absolute", right: "0" }}
                alt=""
              />
              <div class="col-md-9 col-sm-12">
                <h5 class="title" style={{ color: "#fff" }}>
                  Who is eligible to participate in Solution Challenge?
                </h5>
                <hr style={{ marginBottom: "0", background: "#c1c1c1" }} />
                <div class="row col-lg-12">
                  <p class="description" style={{ color: "#fff" }}>
                    <i class="fa fa-code-branch" /> Any student who has built a
                    project under the support of Developer Student Clubs
                    <br class="mb-2" />
                    <i class="fa fa-code-branch" /> All the team members must
                    have joined DSC or attended workshops before March 2019
                    <br class="mb-2" />
                    <i class="fa fa-code-branch" /> Students have the option of
                    submitting projects they worked on their own, or group
                    projects with a maximum of 5 individuals per group
                    (*Students are also highly encouraged to fairly select the
                    2-4 group members based on individual commitment and impact
                    on the project)
                    <br class="mb-2" />
                    <i class="fa fa-code-branch" /> Students can submit only one
                    project per person (*If you worked on multiple projects,
                    please select one that you would like to submit for this
                    solution challenge)
                  </p>
                </div>

                <br />

                <h5 class="title" style={{ color: "#fff" }}>
                  What type of solutions will be accepted?
                </h5>
                <hr style={{ marginBottom: "0", background: "#c1c1c1" }} />
                <div class="row col-lg-12">
                  <p class="description" style={{ color: "#fff" }}>
                    <i class="fa fa-code-branch" /> Must solve a challenge faced
                    by a local community, business or organization
                    <br class="mb-2" />
                    <i class="fa fa-code-branch" /> Must be built using Google
                    technologies such as Google Cloud Platform, Android, Actions
                    on Google, Tensorflow, Firebase etc
                    <br class="mb-2" />
                    <i class="fa fa-code-branch" /> Must be built by DSC members
                    <br class="mb-2" />
                    <i class="fa fa-code-branch" /> Must have a prototype of
                    your solution (not just ideas and concepts)
                    <br class="mb-2" />
                    <i class="fa fa-code-branch" /> Must submit a 1 minute
                    YouTube video to demonstrate how your solution works
                  </p>
                </div>

                <br />

                <h5 class="title" style={{ color: "#fff" }}>
                  How to submit your solution - Application form
                </h5>
                <hr style={{ background: "#c1c1c1" }} />
                <div class="row col-lg-12">
                  <h6 class="title" style={{ color: "white" }}>
                    <i class="fab fa-yelp " /> Contact the DSC Core Team in your
                    campus to submit your project.
                  </h6>
                  <p class="description" style={{ color: "#fff" }}>
                    <i class="fa fa-code-branch" /> If it's a group project,
                    please select one person to submit the project.
                    <br class="mb-2" />
                  </p>

                  <h6 class="title" style={{ color: "white" }}>
                    <i class="fab fa-yelp " /> The deadline of submission is
                    April 30th, 2019 end of day.{" "}
                  </h6>
                  <p class="description" style={{ color: "#fff" }}>
                    <b>What you need to keep ready: </b>
                    <br class="mb-2" />
                    <i class="fa fa-code-branch" /> Elaborate how you or your
                    team utilised the technology (100 words)
                    <br class="mb-2" />
                    <i class="fa fa-code-branch" /> Share what motivated or
                    inspired you or your team to build this project(100 words)
                    <br class="mb-2" />
                    <i class="fa fa-code-branch" /> The outcome of your
                    project.(100 words)
                    <br class="mb-2" />
                    <i class="fa fa-code-branch" /> Share link to project
                    <br class="mb-2" />
                    <i class="fa fa-code-branch" /> Please demonstrate how your
                    project works in a 1 minute video and upload it on YouTube
                    by including "#DSCSolutionChallenge2019" in the video
                    description.
                    <br class="mb-2" />
                    <b>*</b> Once the form is submitted, applicants cannot make
                    any changes or alterations to the submission. We highly
                    encourage you to get feedback from your DSC Leads and
                    mentors before your submit the form.
                  </p>
                </div>

                <br />

                <h5 class="title" style={{ color: "#fff" }}>
                  How will students’ solutions be evaluated?
                </h5>
                <hr style={{ background: "#c1c1c1" }} />
                <h6 class="title" style={{ color: "white", marginBottom: "0" }}>
                  <i class="fab fa-yelp " /> MVP Testing / Prototype (30%)
                </h6>
                <div class="row col-lg-12 ml-4">
                  <p class="description" style={{ color: "#fff" }}>
                    <i class="fa fa-code-branch" /> In real use or you can
                    demonstrate how your solution works already
                    <br class="mb-2" />
                  </p>
                </div>

                <h6 class="title" style={{ color: "white", marginBottom: "0" }}>
                  <i class="fab fa-yelp " /> Impactful (25%)
                </h6>
                <div class="row col-lg-12 ml-4">
                  <p class="description" style={{ color: "#fff" }}>
                    <i class="fa fa-code-branch" /> Positive impact on industry,
                    society, community or environment
                    <br class="mb-2" />
                  </p>
                </div>

                <h6 class="title" style={{ color: "white", marginBottom: "0" }}>
                  <i class="fab fa-yelp " /> Innovative (15%)
                </h6>
                <div class="row col-lg-12 ml-4">
                  <p class="description" style={{ color: "#fff" }}>
                    <i class="fa fa-code-branch" /> Unique ways of using
                    technology to deliver its product, service and process and
                    how Google products were utilized
                    <br class="mb-2" />
                  </p>
                </div>

                <h6 class="title" style={{ color: "white", marginBottom: "0" }}>
                  <i class="fab fa-yelp " /> Technology (15%)
                </h6>
                <div class="row col-lg-12 ml-4">
                  <p class="description" style={{ color: "#fff" }}>
                    <i class="fa fa-code-branch" /> Whichever technology chosen,
                    it has to be used in the best/most optimized way
                    <br class="mb-2" />
                  </p>
                </div>

                <h6 class="title" style={{ color: "white", marginBottom: "0" }}>
                  <i class="fab fa-yelp " /> Inspirational (15%)
                </h6>
                <div class="row col-lg-12 ml-4">
                  <p class="description" style={{ color: "#fff" }}>
                    <i class="fa fa-code-branch" /> Personal or professional
                    obstacles that were overcome to achieve success
                    <br class="mb-2" />
                  </p>
                </div>

                <br />

                <h5 class="title" style={{ color: "#fff" }}>
                  Evaluation and Judging Process
                </h5>
                <hr style={{ marginBottom: "0", background: "#c1c1c1" }} />
                <div class="row col-lg-12">
                  <p class="description" style={{ color: "#fff" }}>
                    <i class="fa fa-code-branch" /> All submissions will be
                    screened against the eligibility by DSC Solution Challenge
                    team first. After the screening process, DSC Solution
                    Challenge team will shortlist 10 to 15 submissions as
                    Finalists based on the judging criteria. The Finalists will
                    be judged by a Judging Committee composed of DSC core
                    members and technical specialists in Google.
                    <br class="mb-2" />
                  </p>
                </div>

                <br />

                <h5 class="title" style={{ color: "#fff" }}>
                  Prize
                </h5>
                <hr style={{ marginBottom: "0", background: "#c1c1c1" }} />
                <div class="row col-lg-12">
                  <p class="description" style={{ color: "#fff" }}>
                    <i class="fa fa-code-branch" /> Mentorship from Googlers and
                    developers experts on your project
                    <br class="mb-2" />
                    <i class="fa fa-code-branch" /> Story created by Google and
                    featured in official DSC site
                    <br />
                    Watch Hastu’s inspiring story (Home Page)
                    <br class="mb-2" />
                    <i class="fa fa-code-branch" /> Google Cloud Platform
                    credits
                    <br class="mb-2" />
                  </p>
                </div>

                <br />
              </div>
            </div>
          </div>
        </div>

        <div class="featured">
          <div class="container pt-4 pb-4">
            <p class="description" style={{ color: "#444444" }}>
              If you have any doubts mail us at dsckiet@gmail.com or contact the
              DSC Core Team Members in the campus.
              <br />
              <br />
              Aakash - 8791431819
              <br />
              Ritwick - 8218290235
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
