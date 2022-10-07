import React, { Component } from "react";

import AboutUs from "../pages/about-us/AboutUs";
import Headers from "../common/headers";
import Footers from "../common/footers";

//default layout
class MainLayout extends Component {

  //Inherited Parent options.
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <>
          <Headers/>
              <AboutUs/>
          <Footers/>
        </>
    );
  }
}

export default MainLayout;
