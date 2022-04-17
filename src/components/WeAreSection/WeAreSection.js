import React from "react";

function WeAreSection() {
  return (
    <div className="we-are" id="we">
      <img
        className="we-are-red"
        src={require("../images/we-are-red.jpg")}
        alt=""
      />
      <div className="container">
        <div className="we-are-text">
          <h2>More than a Million Players</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere,
            nesciunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="we-are-images">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Earum,
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              quae. quae.
            </p>
          </div>

          <img
            className="we-are-3"
            src={require("../images/we-are3.jpg")}
            alt=""
          />
          <img
            className="we-are-1"
            src={require("../images/we-are1.jpg")}
            alt=""
          />
          <img
            className="we-are-2"
            src={require("../images/we-are2.jpg")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default WeAreSection;
