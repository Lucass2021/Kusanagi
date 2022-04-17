import React from "react";

function ClanSection() {
  return (
    <div className="clan">
      <h2>Pick your Clan</h2>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-2">
            <img src={require("../images/clan1.jpg")} alt="" />
            <h3>Takeda</h3>
          </div>
          <div className="col-sm-2">
            <img src={require("../images/clan2.jpg")} alt="" />
            <h3>Kurogiri</h3>
          </div>
          <div className="col-sm-2">
            <img src={require("../images/clan3.jpg")} alt="" />
            <h3>Hachiman</h3>
          </div>
          <div className="col-sm-2">
            <img src={require("../images/clan4.jpg")} alt="" />
            <h3>Masakado</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClanSection;
