import React from "react";
import google from "../components/assets/google.png";
import visible from "../components/assets/visibility.png";

import "./resister.css";

function Resister(props) {
  return (
    <div id="create-form" className="create-form">
      <div className="create-account">
        <div className="modal-content">
          <div className="modal-header custom-modal-header d-flex justify-content-center mb-4">
            Let's learn, share &amp; inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button
              id="close-form"
              type="button"
              className="close-create-form-btn"
              aria-label="Close"
              onClick={props.onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="px-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="d-flex fw-bold" id="update">
                Sign In
              </h4>
              <button className="btn">
                Don't have an account yet?{" "}
                <span className="text-primary" id="sign-in">
                  Create new account for free
                </span>
              </button>
            </div>
            <div className="container text-center">
              <div className="row">
                <div className="col">
                  <div className="d-flex flex-column gap-2">
                    <div className="d-flex">
                      <input
                        type="text"
                        className="form-control custom-input"
                        placeholder="First Name"
                        id="hide-for-sign-in1"
                        style={{ display: "block" }}
                      />
                      <input
                        type="text"
                        className="form-control custom-input"
                        placeholder="Last Name"
                        id="hide-for-sign-in2"
                        style={{ display: "block" }}
                      />
                    </div>
                    <input
                      type="email"
                      className="form-control custom-input"
                      placeholder="Email"
                    />
                    <div className="d-flex align-items-center justify-content-between position-relative">
                      <input
                        type="password"
                        className="form-control custom-input"
                        placeholder="Password"
                      />
                      <button
                        className="btn position-absolute"
                        style={{ right: "10px" }}
                      >
                        <img
                          src={visible}
                          alt="eye"
                          width="18px"
                          height="18px"
                        />
                      </button>
                    </div>

                    <button
                      className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center mb-4"
                      data-bs-dismiss="modal"
                      id="update1"
                    >
                      Sign In
                    </button>
                    <div className="d-flex flex-column gap-2">
                      <button className="btn d-flex align-items-center justify-content-center gap-2 button-signup-group">
                        <img
                          src="https://dont-copy.netlify.app/assets/facebook-ImnSLa_q.svg"
                          alt="facebook"
                        />
                        Sign In with Facebook
                      </button>
                      <button className="btn d-flex align-items-center gap-2 button-signup-group justify-content-center">
                        <img src={google} alt="google" />
                        Sign In with Google
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column">
                    <img
                      src="https://dont-copy.netlify.app/assets/signup-OCG-APNN.svg"
                      alt="atg-illustration"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resister;
