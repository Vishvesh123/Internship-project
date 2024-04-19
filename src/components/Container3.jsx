import React from "react";
import Article from "./container3/Article";
import "./container3.css";
import Education from "./container3/Education";
import Meetup from "./container3/Meetup";
import Job from "./container3/Job";
import Sidebar from "./Sidebar";

function Container3() {
  return (
    <div class="Container3">
      <div class="mx-auto d-flex gap-5 justify-content-center Section">
        <div class="posts-center position-relative">
          <>
            <Article />
          </>
          <>
            <Education />
          </>
          <>
            <Meetup />
          </>
          <>
            <Job />
          </>
        </div>
        <>
          <Sidebar />
        </>
      </div>
    </div>
  );
}

export default Container3;
