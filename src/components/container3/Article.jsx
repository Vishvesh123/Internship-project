import React from "react";
import dots from "../assets/3dots.png";
import visible from "../assets/visibility.png";
import share from "../assets/share.png";
import "./article.css";

function Article() {
  return (
    <div className="d-flex flex-column border border-1 rounded-2 card-container Card1">
      <img
        src="https://dont-copy.netlify.app/assets/nature-rDsfVg8l.jpg"
        alt="Nature"
        className="imagePost"
      />
      <div className="p-4">
        <h3 className="d-flex">✍️ Article</h3>
        <div className="d-flex gap-6 justify-content-between">
          <h4>What if famous brands had regular fonts? Meet RegulaBrands!</h4>
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
        <ul className="d-flex align-items-center gap-5 list-unstyled"></ul>
        <p>
          I've worked in UX for the better part of a decade. From now on, I plan
          to rei…
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <img
              className="rounded-circle"
              alt="Profile"
              src="https://dont-copy.netlify.app/assets/user1-COSOQoOX.jpg"
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

export default Article;
