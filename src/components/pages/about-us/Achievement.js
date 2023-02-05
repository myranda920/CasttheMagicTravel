import React, { Component } from "react";

import achievement1Image from "../../../assets/images/achievement/ResortAccomodationImage.png";
import achievement2Image from "../../../assets/images/achievement/ParkTickets.png";
import achievement3Image from "../../../assets/images/achievement/ThemeParkReservations.png";
import achievement4Image from "../../../assets/images/achievement/Transportation.png";
import achievement5Image from "../../../assets/images/achievement/Dining.png";
import achievement6Image from "../../../assets/images/achievement/Celebrations.png";
import achievement7Image from "../../../assets/images/achievement/MagicAdd-Ons.png";
import achievement8Image from "../../../assets/images/achievement/UnlimitedEmailSupport.png";
import achievement9Image from "../../../assets/images/achievement/CruiseBookings.png";
import achievement10Image from "../../../assets/images/achievement/Cabin.png";
import achievement11Image from "../../../assets/images/achievement/PackageAdd-OnsCruise.png";
import achievement12Image from "../../../assets/images/achievement/DestinationsCruise.png";
import achievement13Image from "../../../assets/images/achievement/Itineraries.png";
import achievement14Image from "../../../assets/images/achievement/CelebrationsCruise.png";
import achievement15Image from "../../../assets/images/achievement/DiningCruise.png";
import achievement16Image from "../../../assets/images/achievement/RoyalCaribbean.png";
import achievement17Image from "../../../assets/images/achievement/Norwegian.png";
import achievement18Image from "../../../assets/images/achievement/DisneyCruiseLine.png";
import achievement19Image from "../../../assets/images/achievement/CarnivalCruise.png";

class Achievement extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
       <>
           {/* ===============  Achievement area 2 start =============== */}
    
           {/* ===============  Achievement area 2 end =============== */}
           <div className="achievement-area-2 mt-105 p-80">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-12 col-md-12 col-sm-12">
                           <div className="section-head pb-40">
                               {/* <h5>Why Tourx?</h5> */}
                               <h2>Cruise Partnerships</h2>
                           </div>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="0ms">
                           <div className="achievement-card-2">
                               <div className="achieve-img">
                                   <img src={achievement16Image} alt="" className="img-fluid" />
                               </div>
                               <div className="achieve-info">
                                   <h5>Royal Caribbean</h5>
                                   <div className="achieve-icon">
                                       <i className="flaticon-guide" />
                                   </div>
                               </div>
                           </div>
                       </div>
                       {/* partnerships */}
                       <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="0ms">
                           <div className="achievement-card-2">
                               <div className="achieve-img">
                                   <img src={achievement17Image} alt="" className="img-fluid" />
                               </div>
                               <div className="achieve-info">
                                   <h5>Norwegian Cruise Line</h5>
                                   <div className="achieve-icon">
                                       <i className="flaticon-guide" />
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="0ms">
                           <div className="achievement-card-2">
                               <div className="achieve-img">
                                   <img src={achievement18Image} alt="" className="img-fluid" />
                               </div>
                               <div className="achieve-info">
                                   <h5>Disney Cruise Line</h5>
                                   <div className="achieve-icon">
                                       <i className="flaticon-guide" />
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="0ms">
                           <div className="achievement-card-2">
                               <div className="achieve-img">
                                   <img src={achievement19Image} alt="" className="img-fluid" />
                               </div>
                               <div className="achieve-info">
                                   <h5>Carnival Cruise Line</h5>
                                   <div className="achieve-icon">
                                       <i className="flaticon-guide" />
                                   </div>
                               </div>
                           </div>
                       </div>
                          {/* end partnerships */}
                       
                   </div>
               </div>
           </div>
       </>
    );
  }
}

export default Achievement;
