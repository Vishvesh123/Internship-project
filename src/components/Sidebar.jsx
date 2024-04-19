import React from "react";
import location from "../components/assets/location.png";
import write from "../components/assets/write.png";
import error from "../components/assets/error.png";
import thumps from "../components/assets/thumps.png";

import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="container d-none d-lg-flex flex-column mt-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center location ">
            <img src={location} alt="location" />
            <input
              type="text"
              placeholder="Enter Your Location"
              className="input-text"
            />
          </div>
          <button className="btn">
            <img src={write} alt="edit" />
          </button>
        </div>
        <hr className="my-1" />
        <div className="d-flex align-items-center gap-2 mb-4">
          <img src={error} alt="information" className="align-self-start" />
          <p className="location-info">
            Your location will help us serve better and extend a personalised
            experience.
          </p>
        </div>
        <div className="d-flex align-items-center gap-2 text-capitalize mb-3">
          <img src={thumps} alt="thumbs up" />
          <span className="text-recommended">REcommended Groups</span>
        </div>
        <div className="d-flex flex-column gap-4">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <img
                className="rounded-circle"
                alt="Profile"
                src="https://dont-copy.netlify.app/assets/recGroup1-JHI-0zi5.jpg"
                width="36"
                height="36"
              />
              <div className="text-wrapper">Leisure</div>
            </div>
            <a className="btn follow rounded-5" href="/">
              Follow
            </a>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <img
                className="rounded-circle"
                alt="Profile"
                src="https://dont-copy.netlify.app/assets/recGroup1-JHI-0zi5.jpg"
                width="36"
                height="36"
              />
              <div className="text-wrapper">Activism</div>
            </div>
            <a className="btn follow rounded-5" href="/">
              Follow
            </a>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <img
                className="rounded-circle"
                alt="Profile"
                src="https://dont-copy.netlify.app/assets/recGroup3-AxHGDmNo.jpg"
                width="36"
                height="36"
              />
              <div className="text-wrapper">MBA</div>
            </div>
            <a className="btn follow rounded-5" href="/">
              Follow
            </a>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <img
                className="rounded-circle"
                alt="Profile"
                src="https://dont-copy.netlify.app/assets/recGroup4-cA6Wedko.jpg"
                width="36"
                height="36"
              />
              <div className="text-wrapper">Philosophy</div>
            </div>
            <a className="btn follow rounded-5" href="/">
              Follow
            </a>
          </div>
        </div>
        <button className="btn text-end mt-5 text-primary text-capitalize">
          see more...
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
