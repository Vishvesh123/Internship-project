import React from "react";
import arrow from "./assets/arrow-back.png";

import "./container1.css";

function Container1() {
  return (
    <div className="container1">
      <div className="responsive d-lg-none">
        <button className="arrow" type="submit">
          <img
            alt="Search"
            className="arrow-back"
            src={arrow}
            width="22"
            height="22"
          />
        </button>
        <button type="button" class="btn btn-outline-info">
          Join Group
        </button>
      </div>

      <div className="container1-text">
        <h1 className="text-white">Computer Engineering</h1>
        <p className="text-white mb-5">
          142,765 Computer Engineers follow this
        </p>
      </div>
    </div>
  );
}

export default Container1;
