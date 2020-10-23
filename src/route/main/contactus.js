import React from 'react';

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
                                <h2>Contact Us</h2>
                                {/* <ul>
                                    <li><a href="/home">Home</a></li>
                                    <li><span>About</span></li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="wpo-contact-form-map section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="contact-form">
                                        <h2>Get In Touch</h2>
                                        <form className="form">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-12">
                                                    <div className="form-field">
                                                        <input type="text" name="name" placeholder="Name" />
                                                        <p />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-12">
                                                    <div className="form-field">
                                                        <input type="text" name="lastname" placeholder="Lastname" />
                                                        <p />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-field">
                                                        <input type="email" name="email" placeholder="Email" />
                                                        <p />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-field">
                                                        <input type="text" name="subject" placeholder="Subject" />
                                                        <p />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-field"><textarea name="message" placeholder="Message" defaultValue={""} /></div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-submit"><button type="submit" className="theme-btn">Send Message</button></div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="contact-map">
                                        <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Cadogan%20Estate%20%20%20Road%202,%20Lekki%20Phase%201,%20Lekki+(SkillLink)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                                        
                                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671" /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="wpo-contact-info">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div className="info-item">
                                            <h2>3O Bromley, Cadogan Estate,Lagos State</h2>
                                            <div className="info-wrap">
                                                {/* <div className="info-icon"><i className="ti-world" /></div> */}
                                                <div className="info-text"><span>Office Address</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div className="info-item">
                                            <h2>skilllinkng@gmail.com</h2>
                                            <div className="info-wrap">
                                                {/* <div className="info-icon-2"><i className="fi flaticon-envelope" /></div> */}
                                                <div className="info-text"><span>Official Mail</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div className="info-item">
                                            <h2>234-703 9378 492</h2>
                                            <div className="info-wrap">
                                                {/* <div className="info-icon-3"><i className="ti-headphone-alt" /></div> */}
                                                <div className="info-text"><span>Official Phone</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
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
