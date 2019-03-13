import React, { Component } from "react";
import "./MainNavbar.scss";

export default class MainNavbar extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div className="main-menu">
          <nav id="nav left">
            <ul id="navigation" className="left-nav">
              <li>
                <a href="/" class="first">
                  Home
                </a>
              </li>
              <li>
                <a href="#">About &raquo;</a>
                <ul>
                  <li>
                    <a href="#">aaaa &raquo;</a>
                    <ul>
                      <li>
                        <a href="#">aaaa </a>
                      </li>

                      <li>
                        <a href="#">aaaa</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">aaaa</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">People</a>
              </li>
              <li>
                <a href="#">Membership &raquo;</a>
                <ul>
                  <li>
                    <a href="#">aaaa</a>
                  </li>
                  <li>
                    <a href="#">aaaa</a>
                  </li>
                  <li>
                    <a href="#">aaa &raquo;</a>
                    <ul>
                      <li>
                        <a href="#">aaaa</a>
                      </li>
                      <li>
                        <a href="#">aaaaa</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">aaaa </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Contest</a>
              </li>
              <li>
                <a href="#">Activities</a>
              </li>
              <li>
                <a href="#">Notice</a>
              </li>
              <li>
                <a href="#" class="last">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <nav id="nav right">
            <ul id="navigation" className="right-nav">
              <li>
                <a href="/" class="first">
                  Right
                </a>
              </li>
              <li>
                <a href="/" class="last">
                  Last
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}
