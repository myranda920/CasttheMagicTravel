import React, { Component } from "react";

import achievement1Image from "../../../assets/images/achievement/ResortAccomodationImage.png";
import achievement2Image from "../../../assets/images/achievement/ParkTickets.png";
import achievement3Image from "../../../assets/images/achievement/ThemeParkReservations.png";
import achievement4Image from "../../../assets/images/achievement/Transportation.png";
import achievement5Image from "../../../assets/images/achievement/Dining.png";
import achievement6Image from "../../../assets/images/achievement/Celebrations.png";
import achievement7Image from "../../../assets/images/achievement/MagicAdd-Ons.webp";
import achievement8Image from "../../../assets/images/achievement/UnlimitedEmailSupport.png";
import achievement9Image from "../../../assets/images/achievement/CruiseBookings.png";
import achievement10Image from "../../../assets/images/achievement/Cabin.png";
import achievement11Image from "../../../assets/images/achievement/PackageAdd-OnsCruise.png";
import achievement12Image from "../../../assets/images/achievement/DestinationsCruise.webp";
import achievement13Image from "../../../assets/images/achievement/Itineraries.png";
import achievement14Image from "../../../assets/images/achievement/CelebrationsCruise.png";
import achievement15Image from "../../../assets/images/achievement/DiningCruise.webp";

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
           <div className="achievement-area-2 mt-105 p-80">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-12 col-md-12 col-sm-12">
                           <div className="section-head pb-40">
                               {/* <h5>Why Tourx?</h5> */}
                               <h2>Disneyland and Walt Disney World Packages Including:</h2>
                           </div>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="0ms">
                           <div className="achievement-card-2">
                               <div className="achieve-img">
                                   <img src={achievement1Image} alt="" className="img-fluid" />
                               </div>
                               <div className="achieve-info">
                                   <h5>Resort Accomodations</h5>
                                   <div className="achieve-icon">
                                       <i className="flaticon-guide" />
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="200ms">
                           <div className="achievement-card-2">
                               <div className="achieve-img">
                                   <img src={achievement2Image} alt="" className="img-fluid" />
                               </div>
                               <div className="achieve-info">
                                   <h5>Park Tickets</h5>
                                   <div className="achieve-icon">
                                       <i className="flaticon-trust" />
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="400ms">
                           <div className="achievement-card-2">
                               <div className="achieve-img">
                                   <img src={achievement3Image} alt="" className="img-fluid" />
                               </div>
                               <div className="achieve-info">
                                   <h5>Theme Park Reservations</h5>
                                   <div className="achieve-icon">
                                       <i className="flaticon-experience" />
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="600ms">
                           <div className="achievement-card-2">
                               <div className="achieve-img">
                                   <img src={achievement4Image} alt="" className="img-fluid" />
                               </div>
                               <div className="achieve-info">
                                   <h5>Transportation</h5>
                                   <div className="achieve-icon">
                                       <i className="flaticon-traveller" />
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="600ms">
                           <div className="achievement-card-2">
                               <div className="achieve-img">
                                   <img src={achievement5Image} alt="" className="img-fluid" />
                               </div>
                               <div className="achieve-info">
                                   <h5>Dining</h5>
                                   <div className="achieve-icon">
                                       <i className="flaticon-traveller" />
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="600ms">
                           <div className="achievement-card-2">
                               <div className="achieve-img">
                                   <img src={achievement6Image} alt="" className="img-fluid" />
                               </div>
                               <div className="achieve-info">
                                   <h5>Celebrations</h5>
                                   <div className="achieve-icon">
                                       <i className="flaticon-traveller" />
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="600ms">
                           <div className="achievement-card-2">
                               <div className="achieve-img">
                                   <img src={achievement7Image} alt="" className="img-fluid" />
                               </div>
                               <div className="achieve-info">
                                   <h5>Magic Add-Ons</h5>
                                   <div className="achieve-icon">
                                       <i className="flaticon-traveller" />
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="600ms">
                           <div className="achievement-card-2">
                               <div className="achieve-img">
                                   <img src={achievement8Image} alt="" className="img-fluid" />
                               </div>
                               <div className="achieve-info">
                                   <h5>Unlimited Email Support</h5>
                                   <div className="achieve-icon">
                                       <i className="flaticon-traveller" />
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           {/* ===============  Achievement area 2 end =============== */}
           <div className="achievement-area-2 mt-105 p-80">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-12 col-md-12 col-sm-12">
                           <div className="section-head pb-40">
                               {/* <h5>Why Tourx?</h5> */}
                               <h2>Cruise Packages Including but not limited to:</h2>
                           </div>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="0ms">
                           <div className="achievement-card-2">
                               <div className="achieve-img">
                                   <img src={achievement9Image} alt="" className="img-fluid" />
                               </div>
                               <div className="achieve-info">
                                   <h5>Cruise Bookings</h5>
                                   <div className="achieve-icon">
                                       <i className="flaticon-guide" />
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="200ms">
                           <div className="achievement-card-2">
                               <div className="achieve-img">
                                   <img src={achievement10Image} alt="" className="img-fluid" />
                               </div>
                               <div className="achieve-info">
                                   <h5>Cabin</h5>
                                   <div className="achieve-icon">
                                       <i className="flaticon-trust" />
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="400ms">
                           <div className="achievement-card-2">
                               <div className="achieve-img">
                                   <img src={achievement11Image} alt="" className="img-fluid" />
                               </div>
                               <div className="achieve-info">
                                   <h5>Package Add-Ons</h5>
                                   <div className="achieve-icon">
                                       <i className="flaticon-experience" />
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="600ms">
                           <div className="achievement-card-2">
                               <div className="achieve-img">
                                   <img src={achievement12Image} alt="" className="img-fluid" />
                               </div>
                               <div className="achieve-info">
                                   <h5>Destinations</h5>
                                   <div className="achieve-icon">
                                       <i className="flaticon-traveller" />
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="600ms">
                           <div className="achievement-card-2">
                               <div className="achieve-img">
                                   <img src={achievement13Image} alt="" className="img-fluid" />
                               </div>
                               <div className="achieve-info">
                                   <h5>Itineraries</h5>
                                   <div className="achieve-icon">
                                       <i className="flaticon-traveller" />
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="600ms">
                           <div className="achievement-card-2">
                               <div className="achieve-img">
                                   <img src={achievement14Image} alt="" className="img-fluid" />
                               </div>
                               <div className="achieve-info">
                                   <h5>Celebrations</h5>
                                   <div className="achieve-icon">
                                       <i className="flaticon-traveller" />
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="600ms">
                           <div className="achievement-card-2">
                               <div className="achieve-img">
                                   <img src={achievement15Image} alt="" className="img-fluid" />
                               </div>
                               <div className="achieve-info">
                                   <h5>Dining</h5>
                                   <div className="achieve-icon">
                                       <i className="flaticon-traveller" />
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="600ms">
                           <div className="achievement-card-2">
                               <div className="achieve-img">
                                   <img src={achievement8Image} alt="" className="img-fluid" />
                               </div>
                               <div className="achieve-info">
                                   <h5>Unlimited Email Support</h5>
                                   <div className="achieve-icon">
                                       <i className="flaticon-traveller" />
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </>
    );
  }
}

export default Achievement;
