import React, { Component } from "react";
import ModalVideo from 'react-modal-video'

import about1Img from "../../../assets/images/MainImage.png"
import about3Img from "../../../assets/images/FamilyPhoto.png"
import {Link} from "react-router-dom";

class AboutWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

  render() {
      const {isOpen } = this.state;
    return (
       <>
           {/* ===============  About wrapper area start =============== */}
           <div className="about-wrapper mt-120">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-7 col-md-12">
                           <div className="about-wrapper-left">
                               <div className="about-img">
                                   <img src={about1Img} alt="" className="img-fluid" />
                               </div>

                           </div>
                       </div>
                       <div className="col-lg-5 col-md-12">
                           <div className="about-wrapper-right section-head head-left">
                               <h5>About Us</h5>
                               <h2>Stress-free travel is magic</h2>
                               <p>Cast your travel dreams on me and embark on a magical adventure! I will be your personal travel concierge. I will offer services on land that include but are not limited to booking your hotel, theme park tickets, and dining experiences. Or on Sea like a fabulous cruise, your cabin, and helping you with the finer details! Whether land or sea I’ll help you make your trip sparkle with ideas for special events and celebrations.I will do all the leg work so you can get back to more important stuff like daydreaming about your next trip. Even if it's your first time, I will make sure you know all the tips and tricks so you can maximize you and your family's experience on your next trip.</p>
                               {/* <ul className="about-list">
                                   <li><i className="flaticon-double-checking" /> Disney Experiences</li>
                                   <li><i className="flaticon-double-checking" /> Cruises</li>
                                   <li><i className="flaticon-double-checking" /> Donec viverra orci On a</li>
                                   <li><i className="flaticon-double-checking" /> Donec viverra orci On a</li>
                                   <li><i className="flaticon-double-checking" /> Donec viverra orci On a</li>
                                   <li><i className="flaticon-double-checking" /> Donec viverra orci On a</li>
                               </ul> */}
                               {/* <div className="about-wrapper-btn">
                                   <Link to={"#"} className="btn-common">Read More</Link>
                               </div> */}
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           
            {/* About Holly section */}

            <div className="about-wrapper mt-120">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-7 col-md-12">
                           <div className="about-wrapper-left">
                               <div className="about-img">
                                   <img src={about3Img} alt="" className="img-fluid" />
                               </div>

                           </div>
                       </div>
                       <div className="col-lg-5 col-md-12">
                           <div className="about-wrapper-right section-head head-left">
                               <h5>Holly Lee</h5>
                               {/* <h2>Stress-free travel is magic</h2> */}
                               <p>A former Cast Member with over 20 years experience traveling to Disney Destinations. I love traveling and helping people get the most out of their traveling experiences. I have done travel on a dime and with a bigger budget and I will equip you to maximize your dollar and time with your loved ones. I am excited to partner with you as your personal Disney/ Universal Studios/Cruise Concierge!  </p>
                               {/* <ul className="about-list">
                                   <li><i className="flaticon-double-checking" /> Disney Experiences</li>
                                   <li><i className="flaticon-double-checking" /> Cruises</li>
                                   <li><i className="flaticon-double-checking" /> Donec viverra orci On a</li>
                                   <li><i className="flaticon-double-checking" /> Donec viverra orci On a</li>
                                   <li><i className="flaticon-double-checking" /> Donec viverra orci On a</li>
                                   <li><i className="flaticon-double-checking" /> Donec viverra orci On a</li>
                               </ul> */}
                               {/* <div className="about-wrapper-btn">
                                   <Link to={"#"} className="btn-common">Read More</Link>
                               </div> */}
                           </div>
                       </div>
                   </div>
               </div>
           </div>

           <React.Fragment>
               <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="-tJYN-eG1zk" onClose={() => this.setState({ isOpen: false })} />
           </React.Fragment>

           {/* ===============  About wrapper area end =============== */}
       </>
    );
  }
}

export default AboutWrapper;
