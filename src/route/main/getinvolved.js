import React from 'react';

import { Link } from 'react-router-dom'
import Navigation from './../../component/navigation/header';
import Footer from './../../component/navigation/footer';

function App() {
    return (
        <div className="App">


            <Navigation />



            <div className="wpo-mission-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="wpo-section-title">
                                <span></span>
                                <h2>Skilllink Provides an Opportunity for
Individual and Corporate Sponsors to
Contribute to Human and Societal
Development.</h2>
                            </div>
                        </div>
                        <div className="col-12">
                            <p>
                                Skilllink projects are funded through the following sources:
    <li>
                                    <h2>Sponsorship</h2>
                                    <p>
                                        We are open to
                                sponsorships from
                                corporate
                                organizations. We
                                provide corporate
                                organizations with
                                opportunities to
                                increase sustainability
                                and CSR footprint.
        </p>
                                </li>
                                <li>
                                    <h2>Fundraising</h2>
                                    <p>
                                        We organize fundraising activities, and
    run mostly on income generated from:
<li>
                                            The Jade Preteens Boot Camp
                                            a two-week intensive personal
                                            discovery training for children
                                            aged 9 to 12.
</li>
                                        <li>
                                            Keeping Girls Safe Events
                                            Events organized by Skill Link
                                            and focused on helping
                                            institutions deal with risks related
                                            to Human Trafficking and other
                                            predicate offences to money
                                            laundering that target girls.`
</li>
                                    </p>
                                </li>


                                <li>
                                    <h2>Donations</h2>
                                    <p>
                                    We are supported with
donations from well-meaning
individuals as part of their
contributions to human
development.
        </p>
                                </li>
                            </p>
                        </div>
                        </div>

                    </div>
                </div>
                <div className="wpo-about-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 colsm-12">
                                <div className="wpo-about-text">
                                    <div className="wpo-section-title">
                                        {/* <span>What We Do?</span> */}
                                        <h2>Our Process:</h2>
                                    </div>
                                    <p>Skilllink Offers Businesses and Teams an Opportunity to Exercise Their
Corporate Social Responsibility.



<li>- Engage with society in ways that demonstrate positive values to key stakeholders</li>
<li>- Build brand reputation and loyalty as a forward-thinking and socially responsible entity</li>
<li>- Build solid business ties with technical leaders of tomorrow which ensures business sustainability</li>
<li>- Leverage a platform for brand promotion as brand assets will be shared across our platforms with
a fast-growing reach.</li>

 </p>

                                </div>
                            </div>



                            <div className="col-lg-6 col-md-12 colsm-12">
                                <div className="wpo-about-img-3"><img src="/static/media/about3.9af31693.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="wpo-about-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 colsm-12">
                                <div className="wpo-about-text">
                                    <div className="wpo-section-title">
                                        <span>Train a Girl Child,
Train the Nation.</span>
                                        <h2></h2>
                                    </div>

                                    <p>
                                    Individuals can also make donations as their contribution to human development. For donations,
sponsorships, and support, kindly write to: skilllinkng@gmail.com, or call: +234 703 9378 492
                    </p>

                                    <div className="btns">
                                        <Link to="/campaign/list" className="theme-btn">Donate Now</Link>
                                        <ul>
                                            <li className="video-holder">
                                                <div><div className="video-btn"><ul>
                                                    <li>
                                                        {/* <button className="wrap"><i className="fi flaticon-play-button-2" aria-hidden="true" /></button> */}
                                                    </li>
                                                </ul>
                                                </div>
                                                </div>
                                            </li>
                                            {/* <li className="video-text">Watch Our Video</li> */}
                                        </ul>
                                    </div>


                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12 colsm-12">
                                <div style={{ marginTop: '15%' }} >
                                    <img src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/11/holding_hands_in_support-1296x728-header-1296x728.jpg?w=1155&h=1528" alt="Image" />
                                </div>
                            </div>


                            <div className="col-lg-6 col-md-12 colsm-12"><div className="wpo-about-img-3"><img src="/static/media/about3.9af31693.png" alt="" />
                            </div></div></div></div></div>

                {/* <div className="wpo-counter-area undefined">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="wpo-counter-grids">
                                <div className="grid">
                                    <div>
                                        <h2><span className="odometer" data-count={6200}>6200</span>+</h2>
                                    </div>
                                    <p>Donation</p>
                                </div>
                                <div className="grid">
                                    <div>
                                        <h2><span className="odometer" data-count={80}>80</span>+</h2>
                                    </div>
                                    <p>Fund Raised</p>
                                </div>
                                <div className="grid">
                                    <div>
                                        <h2><span className="odometer" data-count={245}>245</span>+</h2>
                                    </div>
                                    <p>Volunteers</p>
                                </div>
                                <div className="grid">
                                    <div>
                                        <h2><span className="odometer" data-count={605}>605</span>+</h2>
                                    </div>
                                    <p>Projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
                {/* <div className="wpo-team-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="wpo-section-title">
                                <span>Meet Our Team</span>
                                <h2>Our Expert Volunteer</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-team-wrap">
                                <div className="wpo-team-img"><img src="/static/media/team-1.8ecf1e74.jpg" alt="" /></div>
                                <div className="wpo-team-content">
                                    <div className="wpo-team-text-sub">
                                        <h2><a href="/volunteer">Smith Tomkin</a> </h2>
                                        <span>CEO &amp; Founder</span>
                                        <ul>
                                            <li><a href="/volunteer"><i className="ti-facebook" /></a></li>
                                            <li><a href="/volunteer"><i className="ti-twitter" /></a></li>
                                            <li><a href="/volunteer"><i className="ti-google" /></a></li>
                                            <li><a href="/volunteer"><i className="ti-instagram" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-team-wrap">
                                <div className="wpo-team-img"><img src="/static/media/team-2.ae3a73a0.jpg" alt="" /></div>
                                <div className="wpo-team-content">
                                    <div className="wpo-team-text-sub">
                                        <h2><a href="/volunteer">Robert Honey</a></h2>
                                        <span>Volunteer</span>
                                        <ul>
                                            <li><a href="/volunteer"><i className="ti-facebook" /></a></li>
                                            <li><a href="/volunteer"><i className="ti-twitter" /></a></li>
                                            <li><a href="/volunteer"><i className="ti-google" /></a></li>
                                            <li><a href="/volunteer"><i className="ti-instagram" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-team-wrap">
                                <div className="wpo-team-img"><img src="/static/media/team-3.0e5f2dce.jpg" alt="" /></div>
                                <div className="wpo-team-content">
                                    <div className="wpo-team-text-sub">
                                        <h2><a href="/volunteer">Juliya Jossoy</a></h2>
                                        <span>Volunteer</span>
                                        <ul>
                                            <li><a href="/volunteer"><i className="ti-facebook" /></a></li>
                                            <li><a href="/volunteer"><i className="ti-twitter" /></a></li>
                                            <li><a href="/volunteer"><i className="ti-google" /></a></li>
                                            <li><a href="/volunteer"><i className="ti-instagram" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
                <Footer />>
            <div className="col-lg-12">
                    <div className="header-menu">
                        <ul className="smothscroll">
                            <li><a href="#scrool"><i className="fa fa-arrow-up" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            );
        }
        
        export default App;
