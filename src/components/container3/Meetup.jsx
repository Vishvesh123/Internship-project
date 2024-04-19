import React from "react";
import calender from "../assets/calender.png";
import location from "../assets/location.png";
import visible from "../assets/visibility.png";
import share from "../assets/share.png";
import dots from "../assets/3dots.png";

import "./meetup.css";

function Meetup() {
  return (
    <div className="d-flex flex-column border border-1 rounded-2 card-container">
      <img
        src="https://dont-copy.netlify.app/assets/car-kZ9O3U5Q.jpg"
        alt="Nature"
        className="imagePost"
      />
      <div className="p-4">
        <h3 className="d-flex">🗓️ Meetup</h3>
        <div className="d-flex gap-6 justify-content-between">
          <h4>Finance &amp; Investment Elite Social Mixer @Lujiazui</h4>
          <div className="btn align-self-start">
            <div className="dropdown">
              <div
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={dots} alt="more details" height="28px" width="28px" />
              </div>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" type="button">
                    Edit
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Report
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    option 3
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="d-flex align-items-center gap-5 list-unstyled">
          <li className="d-flex align-items-center gap-1">
            <img src={calender} alt="date" width="20px" height="20px" />
            Fri, 12 Oct, 2018
          </li>
          <li className="d-flex align-items-center gap-1">
            <img src={location} alt="location" width="20px" height="20px" />
            Ahmedabad, India
          </li>
        </ul>
        <button className="custom-post-link btn mb-4 fw-semibold">
          Visit WebSite
        </button>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <img
              className="rounded-circle"
              alt="Profile"
              src="https://dont-copy.netlify.app/assets/c3ac7682e52df2e10d0a36ec3f243a44-6fhMyk-S.jpg"
              width="48"
              height="48"
            />
            <div className="d-flex flex-column">
              <div className="text-wrapper">Siddharth Goyal</div>
              <div className="d-lg-none">
                <img src={visible} alt="watch" />
                <span>1.4k views</span>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-none d-lg-block pe-4">
              <img src={visible} alt="watch" />
              <span>1.4k views</span>
            </div>
            <button className="btn d-flex align-items-center gap-2 share-btn">
              <img src={share} alt="share" />
              <span className="d-lg-none">Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meetup;
