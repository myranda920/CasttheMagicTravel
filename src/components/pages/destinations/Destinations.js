import React, { Component } from "react";
import BreadCrumb from "./BreadCrumb";
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {Link} from "react-router-dom";

//Import Images
import destinations1Img from "../../../assets/images/destination/main1.png"
import destinations4Img from "../../../assets/images/destination/d1.png"
import destinations5Img from "../../../assets/images/destination/ParkTickets copy.png"
import destinations6Img from "../../../assets/images/destination/ThemeParkReservations copy.png"
import destinations7Img from "../../../assets/images/destination/Transportation copy.png"
import destinations12Img from "../../../assets/images/destination/Dining copy.png"
import destinations13Img from "../../../assets/images/destination/Celebrations copy.png"
import destinations14Img from "../../../assets/images/destination/MagicAdd-Ons copy.png"
import destinations15Img from "../../../assets/images/destination/UnlimitedEmailSupport copy.png"
import destinations16Img from "../../../assets/images/destination/RoyalCaribbean copy.png"
import destinations17Img from "../../../assets/images/destination/Norwegian copy.png"
import destinations8Img from "../../../assets/images/destination/Cabin copy.png"
import destinations9Img from "../../../assets/images/destination/DisneyCruiseLine copy.png"
import destinations10Img from "../../../assets/images/destination/CarnivalCruise copy.png"
import destinations11Img from "../../../assets/images/destination/CruiseBookings copy.png"
import destinations2Img from "../../../assets/images/destination/cruisepartnerships.png"
import destinations3Img from "../../../assets/images/destination/cruisepackages.png"
import destinations18Img from "../../../assets/images/destination/PackageAdd-OnsCruise copy.png"
import destinations19Img from "../../../assets/images/destination/DestinationsCruise copy.png"
import destinations20Img from "../../../assets/images/destination/Itineraries copy.png"
import destinations21Img from "../../../assets/images/destination/CelebrationsCruise copy.png"
import destinations22Img from "../../../assets/images/destination/DiningCruise copy.png"


class AboutUs extends Component {
  render() {

      const destinationsOptions = {
          stagePadding: 1,
          items: 3,
          loop: true,
          margin:20,
          smartSpeed: 1500,
          autoplay: false,
          dots: false,
          nav: true,
          navText : ["<i class='bx bx-chevron-left' ></i>","<i class='bx bx-chevron-right'></i>"],
          responsive:{
              0:{
                  items:1,
                  nav:false,
                  dots : false
              },
              600:{
                  items:2,
                  nav:false,
                  dost : false,
              },
              1000:{
                  items:3,
                  nav:true,
                  loop:true
              }
          }
      };
    return (
       <>
            {/* <BreadCrumb/> */}

           {/* =============== Destinations area start =============== */}
           <div className="destinations-area pt-120">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-12 col-md-12 col-sm-12">
                           <div className="section-head pb-40">
                               <h5>What we offer</h5>
                               <h2>Packages including but not limited to:</h2>
                           </div>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-lg-3 col-md-3">
                           <div className="package-slider-wrap">
                               <img src={destinations1Img} alt="" className="img-fluid" />
                               <div className="pakage-overlay">
                                   <strong>Disneyland & Walt Disney World Packages</strong>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-9 col-md-9">
                           <OwlCarousel className="row owl-carousel destinations-1"  {...destinationsOptions}>
                               <div className="package-card">
                                   <div className="package-thumb">
                                       <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                                           <img src={destinations4Img} alt="" className="img-fluid" />
                                       </Link>
                                   </div>
                                   <div className="package-details">
                                       <div className="package-info">
                                           {/* <h5><span>Resort</span>Accomodations</h5> */}
                                       </div>
                                       <h3><i className="flaticon-arrival" />
                                           <Link to={`${process.env.PUBLIC_URL}/package-details`}>Resort Accomodations</Link>
                                       </h3>
                                       <div className="package-rating">
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           {/* <strong><span>1.3K+</span> Rating</strong> */}
                                       </div>
                                   </div>
                               </div>
                               <div className="package-card">
                                   <div className="package-thumb">
                                       <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                                           <img src={destinations5Img} alt="" className="img-fluid" />
                                       </Link>
                                   </div>
                                   <div className="package-details">
                                       <div className="package-info">
                                           {/* <h5><span>Park</span>Tickets</h5> */}
                                       </div>
                                       <h3><i className="flaticon-arrival" />
                                           <Link to={`${process.env.PUBLIC_URL}/package-details`}>Park Tickets</Link>
                                       </h3>
                                       <div className="package-rating">
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           {/* <strong><span>1.3K+</span> Rating</strong> */}
                                       </div>
                                   </div>
                               </div>
                               <div className="package-card">
                                   <div className="package-thumb">
                                       <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                                           <img src={destinations6Img} alt="" className="img-fluid" />
                                       </Link>
                                   </div>
                                   <div className="package-details">
                                       <div className="package-info">
                                           {/* <h5><span>Theme</span>Park Reservations</h5> */}
                                       </div>
                                       <h3><i className="flaticon-arrival" />
                                           <Link to={`${process.env.PUBLIC_URL}/package-details`}>Park Reservations</Link>
                                       </h3>
                                       <div className="package-rating">
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           {/* <strong><span>1.3K+</span> Rating</strong> */}
                                       </div>
                                   </div>
                               </div>
                               <div className="package-card">
                                   <div className="package-thumb">
                                       <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                                           <img src={destinations7Img} alt="" className="img-fluid" />
                                       </Link>
                                   </div>
                                   <div className="package-details">
                                       <div className="package-info">
                                           {/* <h5><span>Transportation</span></h5> */}
                                       </div>
                                       <h3><i className="flaticon-arrival" />
                                           <Link to={`${process.env.PUBLIC_URL}/package-details`}>Transportation</Link>
                                       </h3>
                                       <div className="package-rating">
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           {/* <strong><span>Dining</span></strong> */}
                                       </div>
                                   </div>
                               </div>
                               <div className="package-card">
                                   <div className="package-thumb">
                                       <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                                           <img src={destinations12Img} alt="" className="img-fluid" />
                                       </Link>
                                   </div>
                                   <div className="package-details">
                                       <div className="package-info">
                                           {/* <h5><span>Park</span>Tickets</h5> */}
                                       </div>
                                       <h3><i className="flaticon-arrival" />
                                           <Link to={`${process.env.PUBLIC_URL}/package-details`}>Dining</Link>
                                       </h3>
                                       <div className="package-rating">
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           {/* <strong><span>1.3K+</span> Rating</strong> */}
                                       </div>
                                   </div>
                               </div>
                               <div className="package-card">
                                   <div className="package-thumb">
                                       <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                                           <img src={destinations13Img} alt="" className="img-fluid" />
                                       </Link>
                                   </div>
                                   <div className="package-details">
                                       <div className="package-info">
                                           {/* <h5><span>Park</span>Tickets</h5> */}
                                       </div>
                                       <h3><i className="flaticon-arrival" />
                                           <Link to={`${process.env.PUBLIC_URL}/package-details`}>Celebrations</Link>
                                       </h3>
                                       <div className="package-rating">
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           {/* <strong><span>1.3K+</span> Rating</strong> */}
                                       </div>
                                   </div>
                               </div>
                               <div className="package-card">
                                   <div className="package-thumb">
                                       <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                                           <img src={destinations14Img} alt="" className="img-fluid" />
                                       </Link>
                                   </div>
                                   <div className="package-details">
                                       <div className="package-info">
                                           {/* <h5><span>Park</span>Tickets</h5> */}
                                       </div>
                                       <h3><i className="flaticon-arrival" />
                                           <Link to={`${process.env.PUBLIC_URL}/package-details`}>Magic Add-Ons</Link>
                                       </h3>
                                       <div className="package-rating">
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           {/* <strong><span>1.3K+</span> Rating</strong> */}
                                       </div>
                                   </div>
                               </div>
                               <div className="package-card">
                                   <div className="package-thumb">
                                       <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                                           <img src={destinations15Img} alt="" className="img-fluid" />
                                       </Link>
                                   </div>
                                   <div className="package-details">
                                       <div className="package-info">
                                           {/* <h5><span>Park</span>Tickets</h5> */}
                                       </div>
                                       <h3><i className="flaticon-arrival" />
                                           <Link to={`${process.env.PUBLIC_URL}/package-details`}>Email Support</Link>
                                       </h3>
                                       <div className="package-rating">
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           {/* <strong><span>1.3K+</span> Rating</strong> */}
                                       </div>
                                   </div>
                               </div>
                           </OwlCarousel>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-lg-9 col-md-9">
                           <OwlCarousel className="row owl-carousel destinations-2"  {...destinationsOptions}>
                               <div className="package-card">
                                   <div className="package-thumb">
                                       <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                                           <img src={destinations16Img} alt="" className="img-fluid" />
                                       </Link>
                                   </div>
                                   <div className="package-details">
                                       <div className="package-info">
                                           {/* <h5><span>$145</span>/Per Person</h5> */}
                                       </div>
                                       <h3><i className="flaticon-arrival" />
                                           <Link to={`${process.env.PUBLIC_URL}/package-details`}>Royal Caribbean</Link>
                                       </h3>
                                       <div className="package-rating">
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           {/* <strong><span>1.3K+</span> Rating</strong> */}
                                       </div>
                                   </div>
                               </div>

                               <div className="package-card">
                                   <div className="package-thumb">
                                       <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                                           <img src={destinations17Img} alt="" className="img-fluid" />
                                       </Link>
                                   </div>
                                   <div className="package-details">
                                       <div className="package-info">
                                           {/* <h5><span>$240</span>/Per Person</h5> */}
                                       </div>
                                       <h3><i className="flaticon-arrival" />
                                           <Link to={`${process.env.PUBLIC_URL}/package-details`}>Norwegion Cruise Line</Link>
                                       </h3>
                                       <div className="package-rating">
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           {/* <strong><span>1.3K+</span> Rating</strong> */}
                                       </div>
                                   </div>
                               </div>

                               <div className="package-card">
                                   <div className="package-thumb">
                                       <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                                           <img src={destinations9Img} alt="" className="img-fluid" />
                                       </Link>
                                   </div>
                                   <div className="package-details">
                                       <div className="package-info">
                                           {/* <h5><span>$300</span>/Per Person</h5> */}
                                       </div>
                                       <h3><i className="flaticon-arrival" />
                                           <Link to={`${process.env.PUBLIC_URL}/package-details`}>Disney Cruise Line</Link>
                                       </h3>
                                       <div className="package-rating">
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           {/* <strong><span>1.3K+</span> Rating</strong> */}
                                       </div>
                                   </div>
                               </div>

                               <div className="package-card">
                                   <div className="package-thumb">
                                       <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                                           <img src={destinations10Img} alt="" className="img-fluid" />
                                       </Link>
                                   </div>
                                   <div className="package-details">
                                       <div className="package-info">
                                           {/* <h5><span>$120</span>/Per Person</h5> */}
                                       </div>
                                       <h3><i className="flaticon-arrival" />
                                           <Link to={`${process.env.PUBLIC_URL}/package-details`}>Carnival Cruise Line</Link>
                                       </h3>
                                       <div className="package-rating">
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           {/* <strong><span>1.3K+</span> Rating</strong> */}
                                       </div>
                                   </div>
                               </div>
                           </OwlCarousel>
                       </div>
                       <div className="col-lg-3 col-md-3">
                           <div className="package-slider-wrap">
                               <img src={destinations2Img} alt="" className="img-fluid" />
                               <div className="pakage-overlay">
                                   <strong>Cruise Partnerships</strong>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-lg-3 col-md-3">
                           <div className="package-slider-wrap">
                               <img src={destinations3Img} alt="" className="img-fluid" />
                               <div className="pakage-overlay">
                                   <strong>Cruise Packages</strong>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-9 col-md-9">
                           <OwlCarousel className="row owl-carousel destinations-1"  {...destinationsOptions}>
                               <div className="package-card">
                                   <div className="package-thumb">
                                       <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                                           <img src={destinations11Img} alt="" className="img-fluid" />
                                       </Link>
                                   </div>
                                   <div className="package-details">
                                       <div className="package-info">
                                           {/* <h5><span>$145</span>/Per Person</h5> */}
                                       </div>
                                       <h3><i className="flaticon-arrival" />
                                           <Link to={`${process.env.PUBLIC_URL}/package-details`}>Cruise Bookings</Link>
                                       </h3>
                                       <div className="package-rating">
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           {/* <strong><span>1.3K+</span> Rating</strong> */}
                                       </div>
                                   </div>
                               </div>
                               <div className="package-card">
                                   <div className="package-thumb">
                                       <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                                           <img src={destinations8Img} alt="" className="img-fluid" />
                                       </Link>
                                   </div>
                                   <div className="package-details">
                                       <div className="package-info">
                                           {/* <h5><span>$240</span>/Per Person</h5> */}
                                       </div>
                                       <h3><i className="flaticon-arrival" />
                                           <Link to={`${process.env.PUBLIC_URL}/package-details`}>Cabin</Link>
                                       </h3>
                                       <div className="package-rating">
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           {/* <strong><span>1.3K+</span> Rating</strong> */}
                                       </div>
                                   </div>
                               </div>
                               <div className="package-card">
                                   <div className="package-thumb">
                                       <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                                           <img src={destinations18Img} alt="" className="img-fluid" />
                                       </Link>
                                   </div>
                                   <div className="package-details">
                                       <div className="package-info">
                                           {/* <h5><span>$300</span>/Per Person</h5> */}
                                       </div>
                                       <h3><i className="flaticon-arrival" />
                                           <Link to={`${process.env.PUBLIC_URL}/package-details`}>Package Add-Ons</Link>
                                       </h3>
                                       <div className="package-rating">
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           {/* <strong><span>1.3K+</span> Rating</strong> */}
                                       </div>
                                   </div>
                               </div>
                               <div className="package-card">
                                   <div className="package-thumb">
                                       <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                                           <img src={destinations19Img} alt="" className="img-fluid" />
                                       </Link>
                                   </div>
                                   <div className="package-details">
                                       <div className="package-info">
                                           {/* <h5><span>$120</span>/Per Person</h5> */}
                                       </div>
                                       <h3>
                                           <i className="flaticon-arrival" />
                                           <Link to={`${process.env.PUBLIC_URL}/package-details`}>Destinations</Link>
                                       </h3>
                                       <div className="package-rating">
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           {/* <strong><span>1.3K+</span> Rating</strong> */}
                                       </div>
                                   </div>
                               </div>
                               <div className="package-card">
                                   <div className="package-thumb">
                                       <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                                           <img src={destinations20Img} alt="" className="img-fluid" />
                                       </Link>
                                   </div>
                                   <div className="package-details">
                                       <div className="package-info">
                                           {/* <h5><span>$120</span>/Per Person</h5> */}
                                       </div>
                                       <h3>
                                           <i className="flaticon-arrival" />
                                           <Link to={`${process.env.PUBLIC_URL}/package-details`}>Itineraries</Link>
                                       </h3>
                                       <div className="package-rating">
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           {/* <strong><span>1.3K+</span> Rating</strong> */}
                                       </div>
                                   </div>
                               </div>
                               <div className="package-card">
                                   <div className="package-thumb">
                                       <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                                           <img src={destinations21Img} alt="" className="img-fluid" />
                                       </Link>
                                   </div>
                                   <div className="package-details">
                                       <div className="package-info">
                                           {/* <h5><span>$120</span>/Per Person</h5> */}
                                       </div>
                                       <h3>
                                           <i className="flaticon-arrival" />
                                           <Link to={`${process.env.PUBLIC_URL}/package-details`}>Celebrations</Link>
                                       </h3>
                                       <div className="package-rating">
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           {/* <strong><span>1.3K+</span> Rating</strong> */}
                                       </div>
                                   </div>
                               </div>
                               <div className="package-card">
                                   <div className="package-thumb">
                                       <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                                           <img src={destinations22Img} alt="" className="img-fluid" />
                                       </Link>
                                   </div>
                                   <div className="package-details">
                                       <div className="package-info">
                                           {/* <h5><span>$120</span>/Per Person</h5> */}
                                       </div>
                                       <h3>
                                           <i className="flaticon-arrival" />
                                           <Link to={`${process.env.PUBLIC_URL}/package-details`}>Dining</Link>
                                       </h3>
                                       <div className="package-rating">
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           {/* <strong><span>1.3K+</span> Rating</strong> */}
                                       </div>
                                   </div>
                               </div>
                               <div className="package-card">
                                   <div className="package-thumb">
                                       <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                                           <img src={destinations15Img} alt="" className="img-fluid" />
                                       </Link>
                                   </div>
                                   <div className="package-details">
                                       <div className="package-info">
                                           {/* <h5><span>$120</span>/Per Person</h5> */}
                                       </div>
                                       <h3>
                                           <i className="flaticon-arrival" />
                                           <Link to={`${process.env.PUBLIC_URL}/package-details`}>Email Support</Link>
                                       </h3>
                                       <div className="package-rating">
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           <i className="bx bxs-star" />
                                           {/* <strong><span>1.3K+</span> Rating</strong> */}
                                       </div>
                                   </div>
                               </div>
                           </OwlCarousel>
                       </div>
                   </div>
               </div>
           </div>
           {/* =============== Destinations area end =============== */}
       </>
    );
  }
}

export default AboutUs;
