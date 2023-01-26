import React, { Component } from "react";

import b_sm_5 from "../../../assets/images/blog/b-sm5.png";

import bd_png from "../../../assets/images/blog/blogteen.jpg"
import b_g_1 from "../../../assets/images/blog/blog-g-1.png"
import b_g_2 from "../../../assets/images/blog/blog-g-2.png"
import b_g_3 from "../../../assets/images/blog/blog-g-3.png"
import c_1 from "../../../assets/images/blog/c-1.png"
import c_2 from "../../../assets/images/blog/c-2.png"
import c_3 from "../../../assets/images/blog/c-3.png"

import b_sm_1 from "../../../assets/images/blog/blogteen2.jpg";
import b_sm_2 from "../../../assets/images/blog/b-sm2.png";
import b_sm_3 from "../../../assets/images/blog/b-sm3.png";
import b_sm_4 from "../../../assets/images/blog/b-sm4.png";


import sidebarBanner from "../../../assets/images/sidebar-banner.png"

import {Link} from "react-router-dom";
class BlogDetails extends Component {

    componentDidMount(){
        this.scrollTop();
    }

    scrollTop()
    {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

  render() {
    return (
        <>
            {/* ===============  breadcrumb area start =============== */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="breadcrumb-wrap">
                                <h2>Blog - Cast the Magic Travel</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ===============  breadcrumb area end =============== */}
            {/* ===============  Blog wrapper area start =============== */}
            <div className="blog-details-wrapper pt-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-details">
                                <div className="blog-title-xl">
                                    <h3>Why you should book a cruise for your next family vacation</h3>
                                    <div className="blog-info-xl">
                                        <Link to={`#`} className="blog-writer"><i className="flaticon-user" />Holly Lee</Link>
                                        {/* <Link to={`#`} className="blog-comment"><i className="flaticon-comment" /><span>(1)</span>Comment</Link> */}
                                    </div>
                                </div>
                                <div className="blog-img-xl">
                                    <img src={bd_png} alt="" className="img-fluid" />
                                    <div className="blog-date"><i className="flaticon-calendar" /> 17 November, 2022</div>
                                </div>
                                <div className="blog-texts mt-30">
                                    <p>Family vacations are just the best... Or at least they definitely have the potential to be!
                                    </p>
                                    <p className="mt-20">We put a lot of time and effort into crafting the perfect one in our minds. One where everyone enjoys themselves and has a great time. We may picture a beautiful beach or lush camping experience with our grateful teens. Just thankful to go anywhere and experience time away with mom and dad. No distractions. They will happily silence their phones and not even care if there is no WiFi available. Long walks on the beach or hiking amongst beautiful trees just reconnecting. Maybe a nice dinner out on the town or laughter and joking while cooking over a campfire… Ok so while all of this may be possible for like a day or one night..if you are lucky…most teens would find that fun for like 2 hours out of the day. That’s if they took the news that there would be no WiFi well.
                                    </p>
                                    <p className="mt-20">
                                    As our kids got older we started to notice that “I’m bored. What are we doing next?” trend. I’m like “nothing we are in Hawaii look out the window..” Anyway despite the fact that we would plan cool stuff here and there and we ultimately had an amazing vacation it was a lot of planning and work on our parts. That’s where cruising comes in…
                                    </p>
                                    <p className="mt-20">
                                    We had taken them on a cruise when they were younger and though it was super fun for them, the ship was older and left a lot to be desired as far as adult and kid activities went. After that we never went again.
                                    </p>
                                    <p className="mt-20">
                                    Because at that time we didn’t do our “homework” and so we didn’t find the right cruise experience for our family. This is crucial to any vacation success rate. We both worked a lot and had a certain budget. I didn’t have a lot of time to look into the specifics. These are a few of the reasons I began my travel agency. 
                                    </p>
                                    <p className="mt-20">
                                    There are a lot of hangups and myths still floating around out there about cruising in general and lots of people worry that they will be bored, TRAPPED with not enough to do.
                                    </p>
                                    <p className="mt-20">This couldn’t be further away from the truth. Ships today have endless amounts of activities and attractions. Zip lines, bumper cars, laser tag, ice skating rinks, and surf simulators are just a few you can expect on today's ships, you will truly be amazed!
                                    </p>
                                    <p className="mt-20">
                                    This past spring after lots of research we took our teens on an amazing cruise that had so many cool activities on the ship we didn’t even get to experience all of them on the 7 night itinerary we chose. 
                                    </p>
                                    <div className="blog-qoute">
                                        <i className="bx bxs-quote-right qoute-icon" />
                                        <strong>Not only was the ship unbelievable and fun for every single one of us, but the ports of call on our itineraries and fun excursions we did together, were memories that we will have forever. My teens still talk about those experiences today. </strong>
                                    </div>
                                    <p>Not only was the ship unbelievable and fun for every single one of us, but the ports of call on our itineraries and fun excursions we did together, were memories that we will have forever. My teens still talk about those experiences today.
                                    </p>
  
                                    {/* <h3 className="sub-title">Things You Can Do to a vibe</h3> */}
                                    <p className="mt-20">My teens also met so many other friends their age that they were able to go off and have fun while on board. As for my husband and I, relaxation called and we also checked out many of the great adult offerings on board.
                                    </p>
                                    <p className="mt-20">Now onto the subject of food. This can really be not only expensive on vacation but tricky. It seems like someone is always hungry and oftentimes not even two people in the group can land on a single food culture that everyone wants…one person wants Mexican while another Chinese…this is my world. This part of the planning becomes a real chore because someone ultimately is unhappy. The beautiful thing about a cruise is quite literally this is NEVER an issue. You can literally be sat in a beautiful restaurant eating exquisite food and they will bring a picky kid pizza if nothing on the menu looks bearable to them. Food quality is top notch and they have just about anything and everything your teen could want. And while they may eat you out of house and home at least on vacation they can eat whenever they want! Food allergies are never a problem because they have amazing options for just about any allergy you can throw at them.
                                    </p>
                                    <p className="mt-20">
                                    Most of us don’t have a ton of time to go on vacations. When we go we want to get the best experience for everyone in our family, especially those teens! You only enjoy the trip as much as your happiest teen lol. Come on over to Castthemagictravel.com and I can make sure that you will be on the right ship, at the right time, and the right place for your next family adventure. You can also shoot me an email and we can start the planning process together at casthemagictravel@gmail.com.
                                    </p>
                                </div>
                                <div className="blog-bottom">
                                    <div className="blog-tags">
                                        <h5>tags:</h5>
                                        <ul>
                                            <li>
                                                <Link to={`#`} >Trip</Link>
                                            </li>

                                            <li>
                                                <Link to={`#`} >Tourist</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="blog-social">
                                        {/* <ul>
                                            <li>
                                                <Link to={`#`}><i className="bx bxl-instagram" /></Link>
                                                <Link to={`#`}><i className="bx bxl-facebook" /></Link>
                                                <Link to={`#`}><i className="bx bxl-twitter" /></Link>
                                                <Link to={`#`}><i className="bx bxl-whatsapp" /></Link>
                                            </li>
                                        </ul> */}
                                    </div>
                                </div>
                                <div className="blog-comments">
                                    {/* <h5>1 Comment</h5> */}
                                    <ul>
                                        {/* <li>
                                            <div className="commentor">
                                                <div className="commentotor-img"><img src={c_1} alt="" /></div>
                                                <div className="commentor-id">
                                                    <strong>Myranda Palomino</strong>
                                                    <p><span>13 November, 2022 </span><span>10.00PM</span></p>
                                                </div>
                                            </div>
                                            <p className="comment">Wow, great read!  </p>
                                            <span className="reply-icon"><i className="bx bx-reply" /> reply</span>
                                        </li> */}
                                        {/* <li>
                                            <div className="commentor">
                                                <div className="commentotor-img"><img src={c_2} alt="" /></div>
                                                <div className="commentor-id">
                                                    <strong>Jonson Hur</strong>
                                                    <p><span>2 April, 2021 </span><span>10.00PM</span></p>
                                                </div>
                                            </div>
                                            <p className="comment">Morbi dictum pulvinar velit, id mollis lorem faucibus acUt sed lacinia ipsum. Suspendisse massa augue lorem faucibus acUt sed lacinia ipsum. Suspendisse </p>
                                            <span className="reply-icon"><i className="bx bx-reply" /> reply</span>
                                        </li>
                                        <li>
                                            <div className="commentor">
                                                <div className="commentotor-img"><img src={c_3} alt="" /></div>
                                                <div className="commentor-id">
                                                    <strong>Jonson Hur</strong>
                                                    <p><span>2 April, 2021 </span><span>10.00PM</span></p>
                                                </div>
                                            </div>
                                            <p className="comment">Morbi dictum pulvinar velit, id mollis lorem faucibus acUt sed lacinia ipsum. Suspendisse massa augue lorem faucibus acUt sed lacinia ipsum. Suspendisse </p>
                                            <span className="reply-icon"><i className="bx bx-reply" /> reply</span>
                                        </li> */}
                                    </ul>
                                </div>
                                {/* <div className="blog-reply">
                                    <form>
                                        <h5>Leave A Reply</h5>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input type="text" placeholder="First Name" />
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" placeholder="Last Name" />
                                            </div>
                                            <div className="col-lg-12">
                                                <input type="email" placeholder="Your Email" />
                                            </div>
                                            <div className="col-lg-12">
                                                <input type="text" placeholder="Subject" />
                                            </div>
                                            <div className="col-lg-12">
                                                <textarea cols={30} rows={7} placeholder="Write Message" defaultValue={""} />
                                            </div>
                                            <div className="col-lg-12">
                                                <input type="submit" defaultValue="Submit Now" />
                                            </div>
                                        </div>
                                    </form>
                                </div> */}
                            </div>
                        </div>

                        
                        <div className="col-lg-4">
                            <div className="blog-sidebar">
                                {/* <div className="sidebar-searchbox">
                                    <div className="input-group search-box">
                                        <input type="text" className="form-control" placeholder="Search Tour..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="bx bx-paper-plane" /></button>
                                    </div>
                                </div> */}
                                <div className="row">
                                    {/* <div className="col-lg-12 col-md-6">
                                        <div className="blog-categorie mt-40">
                                            <h5 className="categorie-head">Categories</h5>
                                            <ul>
                                                <li>
                                                    <Link to={`#`}><i className="bx bxs-chevrons-right" /> Home</Link>
                                                </li>
                                                <li>
                                                    <Link to={`#`}><i className="bx bxs-chevrons-right" /> Destinations</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div> */}
                                    <div className="col-lg-12 col-md-6">
                                        <div className="blog-popular mt-40">
                                            <h5 className="categorie-head">Popular Post</h5>
                                            <ul>
                                                <li className="blog-card-sm">
                                                    <div className="blog-img-sm">
                                                        <img src={b_sm_1} alt="" />
                                                    </div>
                                                    <div className="blog-details-sm">
                                                        <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="blog-title-sm">Cruisin with teens</Link>
                                                        <div className="blog-info">
                                                            <Link to={`#`} className="blog-writer"><i className="flaticon-user" /> Holly Lee</Link>
                                                            <Link to={`#`} className="blog-date"> <i className="flaticon-calendar" />  17 November, 2022</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* <li className="blog-card-sm">
                                                    <div className="blog-img-sm">
                                                        <img src={b_sm_2} alt="" />
                                                    </div>
                                                    <div className="blog-details-sm">
                                                        <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="blog-title-sm">Parish Hill</Link>
                                                        <div className="blog-info">
                                                            <Link to={`#`} className="blog-writer"><i className="flaticon-user" /> Dina Jems</Link>
                                                            <Link to={`#`} className="blog-date"> <i className="flaticon-calendar" />  11 April, 2021</Link>
                                                        </div>
                                                    </div>
                                                </li> */}
                                                {/* <li className="blog-card-sm">
                                                    <div className="blog-img-sm">
                                                        <img src={b_sm_3} alt="" />
                                                    </div>
                                                    <div className="blog-details-sm">
                                                        <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="blog-title-sm">Mount Dtna</Link>
                                                        <div className="blog-info">
                                                            <Link to={`#`} className="blog-writer"><i className="flaticon-user" /> Dina Jems</Link>
                                                            <Link to={`#`} className="blog-date"> <i className="flaticon-calendar" />  11 April, 2021</Link>
                                                        </div>
                                                    </div>
                                                </li> */}
                                                {/* <li className="blog-card-sm">
                                                    <div className="blog-img-sm">
                                                        <img src={b_sm_4} alt="" />
                                                    </div>
                                                    <div className="blog-details-sm">
                                                        <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="blog-title-sm">Lake Geneva</Link>
                                                        <div className="blog-info">
                                                            <Link to={`#`} className="blog-writer"><i className="flaticon-user" /> Dina Jems</Link>
                                                            <Link to={`#`} className="blog-date"> <i className="flaticon-calendar" />  10 April, 2021</Link>
                                                        </div>
                                                    </div>
                                                </li> */}

                                                {/* <li className="blog-card-sm">
                                                    <div className="blog-img-sm">
                                                        <img src={b_sm_5} alt="" />
                                                    </div>
                                                    <div className="blog-details-sm">
                                                        <Link to={`${process.env.PUBLIC_URL}/blog-details`} className="blog-title-sm">Franch Rivira</Link>
                                                        <div className="blog-info">
                                                            <Link to={`#`} className="blog-writer"><i className="flaticon-user" /> Dina Jems</Link>
                                                            <Link to={`#`} className="blog-date"> <i className="flaticon-calendar" />  10 April, 2021</Link>
                                                        </div>
                                                    </div>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="blog-tag mt-40">
                                            <h5 className="categorie-head">Tags</h5>
                                            <ul>
                                                <li>
                                                    <Link to={`#`} >Family</Link>
                                                </li>
                                                <li>
                                                    <Link to={`#`} >Trips</Link>
                                                </li>
                                                <li>
                                                    <Link to={`#`} >Guided Tours</Link>
                                                </li>
                                                <li>
                                                    <Link to={`#`} >Disney</Link>
                                                </li>
                                                <li>
                                                    <Link to={`#`} >Cruises</Link>
                                                </li>
                                                <li>
                                                    <Link to={`#`} >Hotels</Link>
                                                </li>
                                                <li>
                                                    <Link to={`#`} >Vacation</Link>
                                                </li>
                                                <li>
                                                    <Link to={`#`} >Music</Link>
                                                </li>
                                                <li>
                                                    <Link to={`#`} >Activities</Link>
                                                </li>
                                                <li>
                                                    <Link to={`#`} >Cultural</Link>
                                                </li>
                                                <li>
                                                    <Link to={`#`} >Natural</Link>
                                                </li>
                                                <li>
                                                    <Link to={`#`} >Journey</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-12 col-md-6">
                                        <div className="sidebar-banner mt-40">
                                            <img src={sidebarBanner} alt="" className="img-fluid" />
                                            <div className="sidebar-banner-overlay">
                                                <div className="sidebar-content">
                                                    <h3>Get 50% Off
                                                        In Dubai Tour</h3>
                                                    <div className="sidebar-banner-btn">
                                                        <Link to={"#"} >Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ===============  Blog wrapper area end =============== */}
        </>
    );
  }
}

export default BlogDetails;
