import React from "react";
import logo from "./../assets/deletee.avif";
import Authenticate from "./Authenticate";

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg custom-navbar"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} className="navbar-image" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span><i class="fa-solid fa-circle-arrow-left">‌</i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  one
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  two
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  three
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  four
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  five
                </a>
              </li>
              <li className="forbuttons">
              <a  data-bs-toggle="modal"
                    data-bs-target="#loginModal">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
          login
    </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Authenticate />
    </>
  );
}
