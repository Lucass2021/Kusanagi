import React from "react";

function HeroSection() {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 banner-text">
            <h1>
              <span>The best mmorpg</span> <br></br>game about samurai
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              quas dolor corporis odio, hic reiciendis. Ipsam iste consectetur
              blanditiis error.
            </p>
            <a href="#">Learn More</a>
            <div className="banner-text-image">
              <img
                src={require("../images/banner-wallpaper.png")}
                alt="Samurai Banner"
              />
            </div>
          </div>

          <div className="col-sm-5 banner-image">
            <img
              src={require("../images/samurai-banner-original.png")}
              alt="Samurai Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
