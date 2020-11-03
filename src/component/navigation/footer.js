import React from "react";

import { Link } from "react-router-dom";

import { withRouter } from "react-router";

import logo from "./../../SkillLinkWhite.png";

function App({ history }) {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <footer className="wpo-site-footer">
      <section className="wpo-news-letter-section">
        <div className="container">
          <div className="row">
            <div className="col col-md-6 offset-lg-3 col-sm-8 offset-md-2">
              {/* <div className="wpo-newsletter">
                                <h3>Follow us For further information</h3>
                                <div className="wpo-newsletter-form">
                                    <form>
                                        <div><input type="text" placeholder="Enter Your Email" className="form-control" /><button type="submit">Subscribe</button></div>
                                    </form>
                                </div>
                            </div> */}
            </div>
          </div>
        </div>
      </section>
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <img src={logo} alt="" />
                </div>
                <p>Building a self sufficient future for the Nigerian girl. </p>
                {
                  <ul>
                    <li>
                      <a href="/">
                        <i className="ti-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="ti-twitter-alt" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="ti-instagram" />
                      </a>
                    </li>
                  </ul>
                }
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              {/* <div className="widget link-widget resource-widget">
                                <div className="widget-title">
                                    <h3>Top News</h3>
                                </div>
                                <div className="news-wrap">
                                    <div className="news-img"><img src="/static/media/img-1.8c732123.jpg" alt="" /></div>
                                    <div className="news-text">
                                        <h3><a href="/blog">Education for all poor children</a></h3>
                                        <span>12 Nov, 2020</span>
                                    </div>
                                </div>
                                <div className="news-wrap">
                                    <div className="news-img"><img src="/static/media/img-2.8f52d470.jpg" alt="" /></div>
                                    <div className="news-text">
                                        <h3><a href="/blog">Education for all poor children</a></h3>
                                        <span>12 Nov, 2020</span>
                                    </div>
                                </div>
                            </div> */}
            </div>
            <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/ourwork">
                      Our Work
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/get/involved">
                      Get Involved
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/campaign/list">
                      Campaign
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-3 offset-lg-1 col-md-6 col-sm-12 col-12">
              <div className="widget market-widget wpo-service-link-widget">
                <div className="widget-title">
                  <h3>Contact </h3>
                </div>
                {/* <p>online store with lots of cool and exclusive wpo-features</p> */}
                <div className="contact-ft">
                  <ul>
                    <li>
                      <i className="fi flaticon-pin" />
                      30 Bromley Cadogan estate, Jakande, Lekki-Lagos
                      State-Nigeria{" "}
                    </li>
                    <li>
                      <i className="fi flaticon-call" /> 234-703 9378 492
                    </li>
                    <li>
                      <i className="fi flaticon-envelope" /> info@skilllink.org
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright">© 2020 SkillLink. All rights reserved</p>
              <p>
                For donations, sponsorships, and support, kindly contact us:
                info@skilllink.org
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
