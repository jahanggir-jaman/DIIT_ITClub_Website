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
            <ul className="top-menu">
              <li className="menu-li">
                <a href="https://www.diit.edu.bd/">DIIT</a>
              </li>
              <li className="menu-li">
                <a href="http://www.diu.edu.bd/">DIU</a>
              </li>
            </ul>
            <ul className="social-links">
              <li className="menu-li">
                <a href="https://www.diit.edu.bd/">DIIT</a>
              </li>
              <li className="menu-li">
                <a href="http://www.diu.edu.bd/">DIU</a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
