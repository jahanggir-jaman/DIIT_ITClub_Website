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
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <a href="#">Logo Design</a>
                  </li>
                  <li>
                    <a href="#">Identity & Branding &raquo;</a>
                    <ul>
                      <li>
                        <a href="#">Business Cards</a>
                      </li>
                      <li>
                        <a href="#">Brochures</a>
                      </li>
                      <li>
                        <a href="#">Envelopes</a>
                      </li>
                      <li>
                        <a href="#">Flyers</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Wordpress</a>
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
                    <a href="#">Graphic Design</a>
                  </li>
                  <li>
                    <a href="#">Calligraphy</a>
                  </li>
                  <li>
                    <a href="#">Film &raquo;</a>
                    <ul>
                      <li>
                        <a href="#">John Carter</a>
                      </li>
                      <li>
                        <a href="#">The Avengers</a>
                      </li>
                      <li>
                        <a href="#">The Amazing SpiderMan</a>
                      </li>
                      <li>
                        <a href="#">Madagascar 3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Graffity </a>
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
