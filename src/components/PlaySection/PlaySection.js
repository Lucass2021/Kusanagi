import React from "react";

function PlaySection() {
  return (
    <div className="play-section" id="play">
      <div className="container">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-4">
            <img src={require("../images/play.jpg")} alt="" />
          </div>
          <div className="col-sm-6 play-text">
            <h2>
              Exceeding all expectations of <span>the schedule</span>
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
              dolores. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Eos, dolores.Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Eos, dolores. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Eos, dolores.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
              dolores.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
              dolores. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Eos, dolores.Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Eos, dolores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaySection;
