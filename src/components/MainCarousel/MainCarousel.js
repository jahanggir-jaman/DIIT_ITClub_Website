import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class MainCarousel extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Carousel
          // showThumbs={this.props.showThumb}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          useKeyboardArrows
          infiniteLoop
          emulateTouch
        >
          <div>
            <img src="https://via.placeholder.com/1280x720?text=Hello+From+Jaman" />
          </div>
          <div>
            <img src="https://via.placeholder.com/1280x720?text=Hello" />
          </div>
          <div>
            <img src="https://via.placeholder.com/1280x720?text=From+Jaman" />
          </div>
        </Carousel>
      </>
    );
  }
}
