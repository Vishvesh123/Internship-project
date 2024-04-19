import React from "react";
import "./header.css";

import logo from "./assets/logo.png";
import search from "./assets/search.png";
import Resister from "./Resister";

const Header = (props) => {
  return (
    <div className="header-container container d-flex d-lg-flex align-items-center justify-content-between p-3">
      <div className="header-img d-none d-lg-block">
        <img src={logo} width="162.57px" height="24px" alt="Logo" />
      </div>
      <div className="header-form w-50 w-lg-auto  d-flex justify-content-center">
        <form className="d-flex">
          <button className="custom-search" type="submit">
            <img
              alt="Search"
              className="search-img"
              src={search}
              width="22"
              height="22"
            />
          </button>
          <input
            className="form-control custom-input-search"
            type="search"
            placeholder="Search for your favorite groups in ATG"
            aria-label="Search"
          />
        </form>
      </div>
      <div className="header-button d-none d-lg-block">
        <button
          id="show"
          className="btn custom-btn-create p-0 m-0"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={props.handleShowResister}
        >
          create Account.{" "}
          <span className="text-primary fw-bold">
            It's Free!
            <img
              className="rounded-circle"
              alt="Profile"
              src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-arrow\_drop\_down-24px'%20clip-path='url(%23clip0\_1\_1136)'%3e%3cpath%20id='Vector'%20d='M6.41667%209.16669L11%2013.75L15.5833%209.16669H6.41667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0\_1\_1136'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
            />
          </span>
        </button>
        {props.showResister && (
          <div className="create-form-overlay">
            <div className="create-form-container">
              <Resister onClose={props.handleCloseResister} />
            </div>
          </div>
        )}
      </div>

      <div className="responsive-container d-lg-none">
        <div className="responsive d-lg-none">
          <div className="responsive-rect d-lg-none"></div>
          <div className="responsive-circle d-lg-none"></div>
          <div className="responsive-triangle d-lg-none"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
