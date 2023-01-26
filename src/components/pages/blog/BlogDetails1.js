import React, { Component } from "react";

import b_sm_5 from "../../../assets/images/blog/b-sm5.png";

import bd_png from "../../../assets/images/blog/blog2img.png"
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
class BlogDetails1 extends Component {

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
                                    <h3>Top 5 tips for Cruising with your Teen</h3>
                                    <div className="blog-info-xl">
                                        <Link to={`#`} className="blog-writer"><i className="flaticon-user" />Holly Lee</Link>
                                        {/* <Link to={`#`} className="blog-comment"><i className="flaticon-comment" /><span>(1)</span>Comment</Link> */}
                                    </div>
                                </div>
                                <div className="blog-img-xl">
                                    <img src={bd_png} alt="" className="img-fluid" />
                                    <div className="blog-date"><i className="flaticon-calendar" /> 26 January, 2023</div>
                                </div>
                                <div className="blog-texts mt-30">
                                    <p>Ok so you decided to book your next family vacation sailing the high seas on a fabulous cruise
with your teen! And after reaching out to Cast The Magic Travel...(wink wink) together we have
found the perfect itinerary and ship for your family! Now it’s time to get excited! In the mix of all
of that there are a few things you may want to consider before you board regarding your teen in
order to create a smooth sailing trip!
                                    </p>
                                    <h3 className="sub-title">1. Curfew </h3>
                                    <p className="mt-20">
                                    Ok I put this as number one because it was something I hadn’t thought about til I got on the ship
and my teen had made some friends and was like peace out! Curfew isn’t just about what time
they are going to be expected at the end of the night back in their room. That is important and
should be talked about before the trip. Having expectations in their mind and boundaries set
before you leave for the trip will eliminate the potential battle when you are on vacation mode
and trying to relax. You will also be able to talk about expectations you have for family meals or
activities you want them around for. After all, this will vary by family but you will eliminate some
whining and battles before they happen.
I should mention that cruise ships do set a curfew for underage passengers as well. It was later
than I was comfortable with but my teen was on the younger side and lets face it, it was later
than I wanted to stay up! Sleeping beauty needs her rest! Consider your next day events, if you
have a port day or not. Port days mean typically getting off the ship pretty early to explore or
meet your group for an excursion. You want to be fresh!
                                    </p>
                                    <h3 className="sub-title">2. What to bring </h3>
                                    <p className="mt-20">
                                    By now your teen is probably pretty good at packing their own bags for a trip. However, there
are a few things to consider when going on a cruise that may be different from other vacations
experiences. For example, one of the amazing experiences we booked was hiking up an actual
waterfall in Jamaica. Water shoes were an absolute must and not something that was listed on
the excursion. Luckily we had some cash on us (Another tip! Bring CASH!) because we had to
literally have the excursion bus pull off to the side of the road and be at the mercy of the
water-shoe pop up shop,(coincidence, I think not) hopefully having our sizes and be ok with
whatever they gave us and whatever they were charging. Lets just say our feet were
representing the flag colors of Jamaica and we definitely over paid to play. Point is, this is not a
typical vacation and you with the help of your magical travel agent want to be prepared not out
of pocket for events both on and off the ship that you may not have considered.
                                    </p>
                                    <h3 className="sub-title">3. Communication </h3>
                                    <p className="mt-20">The cruise ships of today are typically pretty big and sprawling and packed with various types of
entertainment venues, eating spots, hang out places, and activity areas. Depending on your
comfortability you may want to be able to get a hold of your teen when they are out and about.
Everyone is different and this is largely based on personality. Some families slap a dry erase

magnetic board on their room door (p.s your door and walls of your cabin for that matter are
magnetic!) This way the family will simply write on the door “meet for dinner at 6” or “going to the
teen room, be back in a few hours”
Some families just verbally communicate during breakfast, “meet us at 5:30 for the ice skating
show and then we are all going to have a formal family dinner tonight.”
However, while both of those are fine, that isn’t enough communication for everyone and you
may want to be able to have more communication touch points at your choosing throughout the
day. This was certainly the case for me and my nerves. Most cruise lines offer an internet
package with the option to add a chat feature. Or simply separate chat feature without internet
option. You just need to make sure that everyone's phone is on airplane mode and connected to
the ship's WIFI. These chat services are usually a small fee per person per day and well worth it
if you think you will be going your separate ways while onboard. The connection on board can
be patchy at times but overall pretty reliable and gave me peace of mind that my teen or I could
check in whenever we needed to. Side not on that - external portable phone charger people!
Get one!...or 3!
                                    </p>
                                    <h3 className="sub-title">4. Shy teen </h3>
                                    {/* <div className="blog-qoute">
                                        <i className="bx bxs-quote-right qoute-icon" />
                                        <strong>Not only was the ship unbelievable and fun for every single one of us, but the ports of call on our itineraries and fun excursions we did together, were memories that we will have forever. My teens still talk about those experiences today. </strong>
                                    </div> */}
                                    <p>I learned this tip on a **facebook group right before our cruise. It was so impactful for us that I
had to put it in the top 5. Some teens are really extroverted by nature and naturally make friends
wherever they go. That is awesome but not typically the norm. Most teens, even if they are
outgoing around friends and family, are pretty shy when it comes to meeting new people in a
foreign-to-them environment. Since most Teen areas are come and go as you please, there are
not always ice breaking events onboard the ship, but when there are they are always on the first
night. When you get on board, get a hold of the itinerary of activities for that day. They typically
have a teen meet up after sail away that night. I HIGHLY recommend you encourage your teen
to muster up all the courage and go. Talk about it weeks before you even board and give them
support role play whatever they need. This will take their vacation to a whole new level and
many times over give them friends from all over the map that they will keep in touch with long
after the cruise.
After the first night it can be hard for a teen to break into already formed groups. If that doesn’t
sound like High School I don’t know what does!
**Another amazing thing that is available through facebook is creating relationships with other
families that will be on your sailing even before you board the ship. Simply put the name of the
ship you will be sailing on with the date of your sailing and you can join a private group of
people that will also be on that sailing! You can connect with other families with teens. This
helps give you and your teens an idea of how many other people their age will be on the ship
and people even arrange to meet for lunch so their teens can connect prior to the official teen
meet up. This is a great option if your teen has lots of social anxiety or is on the spectrum. (One
of our teens is and we found this to be a great resource!)
                                    </p>
  
                                    {/* <h3 className="sub-title">Things You Can Do to a vibe</h3> */}
                                    <h3 className="sub-title">5. Drink water and be safe </h3>
                                    <p className="mt-20">No matter how often you remind your darlings to drink water, they won’t. Even if you live in
Arizona!(face of the sun) (we do). Well this is especially important on the ship. They will be no
doubt running around having the time of their lives and they will most likely meet a bunch of
other teens and be distracted and eat ice cream cones, milk shakes, and probably some
starbucks, but they will probably forget to hydrate. We learned this life lesson the hard way
when my teen’s heart rate shot up to 165 while just chilling in a comfortable theater chair
watching Grease. Her watch, (shout out to Apple and all of the smart tech people out there
saving lives), started beeping at her. Me, being a great mom and so quick on my feet...assumed
her watch was broken. Fail. We switched watches and sure enough it went off again: 165.
Something to consider when you are sailing away on a trip of a lifetime ....they have medical
staff onboard... yes, do you want to have to rely on that when you are hundreds of miles from
land...no. Well guess who got to guzzle liquid IV which I was told was “nasty” to which I replied
“keep drinking”. Well everything was fine but I think I lost a whole week of my life from fear and
so did she but guess what...the water got in the body after that incident. So talk to them about
the importance of staying hydrated!
Safety. The ship is pretty contained. There are a lot of trained staff everywhere and they are
amazing. They are there to enhance your trip and keep you and your family safe. However,
nowhere is perfect and it is important to go over safety information with your teen.
We always talk about strength in numbers. Not to walk off and explore without a friend and also
go over the areas on the ship that you are not comfortable with them going to.
Also, make sure that they are aware of the safety protocols in the event of an emergency while
onboard. You will most likely never need to do it, but everyone should know what to do if you
have to for any reason report to your muster station and where that meeting place is. You
should also check with the teen room and ask if they have a special place they meet in case of
such an event as well.
I hope these tips will be helpful to you and your teen when you sail away to your next great
family adventure. A cruise is a pretty unique environment for your teen to gain a little
independence on a family vacation. It can be a really amazing and fun experience for everyone.
It is the perfect playground for everyone to do things they love and still have lots of quality time
to connect with each other. I hope cruising with your teen will bring your family as much joy and
new experiences as it has brought ours.
Please don’t hesitate to reach out to me, your travel advisor from Cast The Magic Travel with
any other questions you might have! Let’s make magic happen!
~Holly
castthemagictravel@gmail.com
                                    </p>
                                    {/* <p className="mt-20">
                                    Most of us don’t have a ton of time to go on vacations. When we go we want to get the best experience for everyone in our family, especially those teens! You only enjoy the trip as much as your happiest teen lol. Come on over to Castthemagictravel.com and I can make sure that you will be on the right ship, at the right time, and the right place for your next family adventure. You can also shoot me an email and we can start the planning process together at casthemagictravel@gmail.com.
                                    </p> */}
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

export default BlogDetails1;