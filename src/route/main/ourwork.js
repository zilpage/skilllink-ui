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
                                <h2>How We Work</h2>
                            </div>
                        </div>
                        <div className="col-12">
                            <p style={{color: 'black'}}>
                                We work with secondary school girls across Lagos State with strong academic, demonstrated Leadership
    traits, high sense of responsibility, or those who may be at a high risk of dropping out of secondary
    school.
    To ensure we provide a holistic learning experience to the participants of the skilllink program, our training
    program will cover three major focus areas:
    <li>Vocational training</li> 
    <li>Busiess management, customer service, and social etiquette</li>
    <li>Mentorship and community engagement.</li>
    We believe that when equipped with these skills, the girls are able to contribute to the society which will
    reward them for their contribution, setting them on a path to financial independence. This makes it
    possible for girls from poor backgrounds to attain university education
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="wpo-about-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 colsm-12">
                            <div className="wpo-about-text">
                                <div className="wpo-section-title">
                                    {/* <span>What We Do?</span> */}
                                    <h2>Our Process:</h2>
                                </div>
                                <p style={{color: 'black'}}>Our selection model has been designed to achieve a high completion rate on the part of our trainees as
well as an overall high success rate.
                                <li><strong>Step 1</strong>: We identify promising girls from various locations across Lagos state and map them to clusters.
    To achieve this, we conduct an assessment to select from the pool girls who meet our prequalification
criteria. Once a cluster (group of 10 girls) is filled, we map it to a specific potential vocational option.</li>
                                    <li><strong>Step 2</strong>: Through in-person and virtual engagements, we prepare the girls by providing preliminary
    orientation for the skilllink program, It is during this stage that the trainees are introduced to the vocations
available on the platform, and information is provided on how they can be accessed.</li>
                                    <li><strong>Step 3</strong>: The trainees are onboarded on the Skilllink platform where they are matched with opportunities.
    These opportunities are the vocation options available on the platforms and implemented in the facilities
of our corporate and training partners.</li>
                                    <li><strong>Step 4</strong>: We continue to engage the trainees through our fulfilment and monitoring track. We monitor their
    progress and provide support where necessary. We implement this phase to ensure a high participant
completion rate and overall success of the program.</li>  </p>

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
                                    <span>Accelerating Our Impact</span>
                                    <h2></h2>
                                </div>

                                <p style={{color: 'black'}}>
                                    We recognize that the work we do is important for both the Nigerian girl and the society, and we believe
                that with the support of individuals and organizations looking to make a positive contribution to society,
                we can make the most impact and transform society through our work,
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
