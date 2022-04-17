import React from "react";

function ServiceSection() {
  return (
    <div className="service" id="our-services">
      <div className="container">
        <h2>Multiplayer</h2>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-3 samurai-position">
            <img src={require("../images/multiplayer1.jpg")} alt="" />
          </div>
          <div className="col-sm-3">
            <img src={require("../images/multiplayer2.jpg")} alt="" />
          </div>
          <div className="col-sm-3 samurai-position">
            <img src={require("../images/multiplayer3.jpg")} alt="" />
            <h3>The best game</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Pariatur, blanditiis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
