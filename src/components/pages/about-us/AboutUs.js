import React, { Component } from "react";
import BreadCrumb from "./BreadCrumb";
import AboutWrapper from "./AboutWrapper";
import MainBanner from '../home/MainBanner';
// import GuideWrapper from "./GuideWrapper";
import Achievement from "./Achievement";
// import MainBanner from "../home2/MainBanner";
//import AboutReview from "./AboutReview";
// import AboutBlog from "./AboutBlog";

class AboutUs extends Component {


  render() {
    return (
       <>
          <MainBanner />
           {/* <BreadCrumb/> */}
           <AboutWrapper/>
           <Achievement/>
       </>
    );
  }
}

export default AboutUs;
