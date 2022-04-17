import React from "react";

function About() {
  return (
    <div className="about" id="about-us">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 about-image">
            <img src={require("../images/about.png")} alt="" />
          </div>

          <div className="col-sm-6 about-text">
            <h2>Based on Real Events</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus, maiores!
            </p>
            <a href="">Learn More</a>
          </div>
        </div>
      </div>
      <div className="about-background">
        <img src={require("../images/about-background.png")} alt="" />
      </div>
    </div>
  );
}

export default About;
