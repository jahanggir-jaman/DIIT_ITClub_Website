import React, { Component } from "react";
import "./Topbar.scss";

export default class Topbar extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div className="topbar">
          <div className="topbar-container">
            <nav className="top-menu">
              <a href="https://www.diit.edu.bd/">DIIT</a>

              <a href="http://www.diu.edu.bd/">DIU</a>
            </nav>
            <nav className="social-links">
              <a href="https://www.diit.edu.bd/">DIIT</a>

              <a href="http://www.diu.edu.bd/">DIU</a>
            </nav>
          </div>
        </div>
      </>
    );
  }
}
