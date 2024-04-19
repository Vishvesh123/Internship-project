import React from "react";
import baseline from "./assets/baseline-arrow.png";
import add from "./assets/baseline-group_add.png";

import "./container2.css";

function container2() {
  return (
    <div className="container2">
      <div className="d-none d-lg-flex justify-content-between mx-auto align-items-center container sticky-top">
        <ul className="nav my-2 nav-underline">
          <li className="nav-item">
            <a className="nav-link active" href="/">
              All Posts (32)
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Article
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Event
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Education
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Job
            </a>
          </li>
        </ul>
        <div className="d-flex my-2 align-items-center">
          <button className="btn" aria-label="write-post">
            Write Post
            <img src={baseline} alt="" />
          </button>
          <button
            className="btn btn-primary bg-primary ms-2 gap-2 d-flex align-items-center"
            aria-label="Join group"
          >
            <img src={add} alt="" />
            Join Group
          </button>
        </div>
      </div>
    </div>
  );
}

export default container2;
