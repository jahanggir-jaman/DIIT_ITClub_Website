import React, { Component } from "react";
import Topbar from "../components/Topbar/Topbar";
import Header from "../components/Header/Header";
import MainNavbar from "../components/MainNavbar/MainNavbar";
import MainCarousel from "../components/MainCarousel/MainCarousel";
import Achivements from "../components/Achivements/Achivements";
import Testimonials from "../components/Testimonials/Testimonials";
import Counters from "../components/Counters/Counters";
import Footer from "../components/Footer/Footer";
import AbsoluteFooter from "../components/AbsoluteFooter/AbsoluteFooter";

export default class Homepage extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Topbar />
        <Header />
        <MainNavbar />
        <MainCarousel />
        <Achivements />
        <Testimonials />
        <Counters />
        <Footer />
        <AbsoluteFooter />
      </>
    );
  }
}
