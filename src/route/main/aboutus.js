import React from 'react';

import { Link } from 'react-router-dom'
import Navigation from './../../component/navigation/header';
import Footer from './../../component/navigation/footer';

function App() {
    return (
        <div className="App">


            <Navigation />

            <div className="wpo-breadcumb-area" style={{background: 'url(http://nasarna-react.wpocean.com/static/media/img-1.f69696e6.jpg)' }} >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="wpo-breadcumb-wrap">
                                <h2>About Us</h2>
                                {/* <ul>
                                    <li><a href="/home">Home</a></li>
                                    <li><span>About</span></li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wpo-mission-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="wpo-section-title">
                                {/* <span>Skilllink - Promoting Female Empowerment in Africa</span> */}
                                <h2>Skilllink - Promoting Female Empowerment in Africa</h2>
                            </div>
                        </div>
                        <div className="col-12">
                            <p style={{color: 'black'}}>
                            Skilllink is a platform that promotes female empowerment by connecting girls from secondary schools
across Lagos state to opportunities that equip them with profitable vocational skills and technical
knowledge, giving them the power to transform their lives.
Girls from disadvantaged backgrounds are often faced wth big challenges that may pose a real threat to
their dreams of a better future. When there are no available means of support, the girl child is forced to
live below her potential. Depreived of life basic needs, these girls are left to struggle for survival which
may lead to a halt in their academic pursuits, child marriage, and the involuntary engagement in societal
vices for survival. Our goal is to empower the less privileged Lagos schoolgirl to take control of her future.
We implement this goal through our program for girls.
In partnership with individuals and corporate bodies, we invest in the vocational training of girls from low
income households, setting in motion a sustainable plan to secure our well-being as a society. This
training, which will equip girls to take on opportunities in traditionally made-dominated industries will serve
as an attempt to narrow the gender pay gap.
                            </p>
                        </div>
                    </div>
                
                </div>
            </div>
            <div className="wpo-about-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 colsm-12">
                            <div className="wpo-about-text" style={{color: 'black'}}>
                                <div className="wpo-section-title">
                                    {/* <span>What We Do?</span> */}
                                    <h2>How We Define Success</h2>
                                </div>
                                <p style={{color: 'black'}}>The overall goal of the Skill Link platform and programs is to empower the less privileged Lagos schoolgirl to take control of her future. We have itemized below what success will look like for participants on the Skill Link platform:
                                <li>High completion rate of Skill Link programs by trainees, not less than 80%.</li>
                                <li>High completion rate of secondary school education by trainees, not less than 80%.</li>
                                <li>Increased rate of higher education enrollment among trainees.</li>
                                <li>Increased employability of trainees.</li>
                                <li>Improved financial inclusion and literacy among trainees.</li>
                                <li>Increased brand awareness and goodwill for sponsors.</li>  </p>
                                
                            </div>
                        </div>




                        <div className="col-lg-6 col-md-12 colsm-12">
                            <div className="wpo-about-text">
                                <div className="wpo-section-title">
                                    <span></span>
                                    <h2>Ultimately, Skilllink Will Lift Many Out of Poverty by Socializing the
Effective Work Ethics and Skills Development in the Communities Where
These Girls Live.</h2>
                                </div>
                                
                                
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
                    <img src={require('./../../assets/MKCoursin_Enugu-144.jpg')} alt="Image" />
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
