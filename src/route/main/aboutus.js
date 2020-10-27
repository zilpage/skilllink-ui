import React from "react";

import { Link } from "react-router-dom";
import Navigation from "./../../component/navigation/header";
import Footer from "./../../component/navigation/footer";
import bglogo from "./../../assets/connecting_classrooms_nigeria_used_to_represent_esspin.jpg";

function App() {
  return (
    <div className="App" id="scrool">
      <Navigation />
      <div
        className="wpo-breadcumb-area"
        style={{
          background:
            "url(http://nasarna-react.wpocean.com/static/media/img-1.f69696e6.jpg)",
        }}
      >
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
                <h3>
                  Skilllink - Promoting Gender Equality by Connecting Girls to
                  Lifelong and Profitable Vocational Skills
                </h3>
              </div>
            </div>
            <div className="col-12">
              <p>
                Skilllink promotes gender equality by connecting girls, in Lagos
                State senior secondary schools, to opportunities that enable
                them develop lifelong and profitable vocational skills.
                Skilllink focuses on vocations which have been largely dominated
                by the male gender. Equipped with money-making skills and
                trained to contribute to their communities, the girls progress
                to gain financial independence and freedom from poverty. In this
                way, our work contributes to narrowing gender income inequality.
                Skilllink targets schoolgirls from low-income homes, where
                funding for university education is most likely unavailable.
                Typically, a significant portion of such girls drop out of
                secondary school and many of those who finish end up stranded,
                unable to advance their education. When girls are stranded, they
                become preys to perpetrators of human trafficking, drug
                trafficking, baby factories and other vices. This should no
                longer be happening! Rather, girls should be prepared; so, they
                can rely on their vocational skills to become economically
                active in the society. Skilllink partners with various actors to
                provide opportunities to empower girls in this way. By investing
                in the vocational training of the girls, we set in motion a
                sustainable plan to secure our wellbeing as a society. As the
                popular saying goes, those who train a girl-child, indeed train
                a whole village.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="wpo-about-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 colsm-12">
              <div className="wpo-about-text" style={{ color: "black" }}>
                <div className="wpo-section-title">
                  {/* <span>What We Do?</span> */}
                  <h3>How We Define Success</h3>
                </div>
                <p>
                  <li>
                    High completion rate of SkillLink programs by trainees, not
                    less than 80%.
                  </li>
                  <li>
                    High completion rate of secondary school education by
                    trainees, not less than 80%.
                  </li>
                  <li>
                    Increased rate of higher education enrollment among
                    trainees.
                  </li>
                  <li>Increased employability of trainees.</li>
                  <li>
                    Improved financial inclusion and literacy among trainees.
                  </li>
                  <li>Increased brand awareness and goodwill for sponsors.</li>{" "}
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12 colsm-12"
              style={{
                backgroundImage: `url(${bglogo})`,
                opacity: 0.6,
              }}
            >
              <div className="wpo-about-text">
                <div className="wpo-section-title">
                  <span></span>
                  <p
                    style={{
                      color: "white",
                      fontSize: 25,
                      fontStyle: "italic",
                      textAlign: "center",
                    }}
                  >
                    Ultimately, Skilllink Will Lift Many Out of Poverty by
                    Socializing the Effective Work Ethics and Skills Development
                    in the Communities Where These Girls Live.
                  </p>
                  <p
                    style={{
                      color: "white",
                      fontSize: 25,
                      fontStyle: "italic",
                    }}
                  >
                    .....SkillLink
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 colsm-12">
              <div className="wpo-about-img-3">
                <img src="/static/media/about3.9af31693.png" alt="" />
              </div>
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

                <p>
                  Empowering underprivileged girls is important, not only for
                  the girls and their immediate families, but for their
                  communities and the Nigerian larger society as well. With
                  support from individuals and organizations, looking to
                  positively impact our society; we can make a difference
                  through our work.
                </p>

                <div className="btns">
                  <Link to="/campaign/list" className="theme-btn">
                    Donate Now
                  </Link>
                  <ul>
                    <li className="video-holder">
                      <div>
                        <div className="video-btn">
                          <ul>
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
              <div style={{ marginTop: "15%" }}>
                <img
                  src={require("./../../assets/MKCoursin_Enugu-144.jpg")}
                  alt="Image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12 colsm-12">
              <div className="wpo-about-img-3">
                <img src="/static/media/about3.9af31693.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <Footer />
      <div className="col-lg-12">
        <div className="header-menu">
          <ul className="smothscroll">
            <li>
              <a href="#scrool">
                <i className="fa fa-arrow-up" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
