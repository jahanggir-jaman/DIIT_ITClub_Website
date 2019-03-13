import React, { Component } from "react";
import "./Header.scss";

export default class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div className="main-header">
          <div className="header-container">
            <div className="logo">
              <a href="/">
                <img
                  className="logo-img"
                  alt="diit-it-club-logo"
                  src="http://diit.edu.bd/static/img/diit_logo.png"
                />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
