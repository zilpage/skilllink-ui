import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import { withRouter } from 'react-router';
import AuthenticationService from './../../service/authentication_service'


import logo from './../../SkillLink.png'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            result: null,
        }
    }

    logout = () => {
        AuthenticationService.clearLocalstorage();
        this.props.history.push('/')
    }

    render() {
        console.log(this.props.location.pathname);
        return (
            <div className="middle-header header-style-3">
                <div className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col col-md-6 col-sm-12 col-12">
                            <div className="contact-intro">
                                <ul>
                                    <li><i className="fa fa-phone" /> +234-703 4000 056</li>
                                    <li><i className="fa fa-envelope" /> info@skillLink.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-md-6 col-sm-12 col-12">
                            <div className="contact-info">
                               {!AuthenticationService.getToken() && <ul>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/signup">Sign Up</Link></li>
                                </ul>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="container">
                    <div className="header-content">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                                <div className="logo"><a title ><img src={logo} alt="" style={{ maxHeight: '80px' }} /></a></div>
                            </div>
                            <div className="col-lg-8 d-lg-block d-none">
                                <nav>
                                    <ul>
                                        {/* <li>
                                        <a className="active" onClick={() => history.push(`/`)} >Home</a>
                                    </li>
                                    <li>
                                        <a className="f" onClick={() => history.push(`/about`)} >About</a>
                                    </li>
                                    <li>
                                        <a className="s" onClick={() => history.push(`/contact`)} >Contact</a>
                                    </li> */}


                                        <li>
                                            <Link to="/" className={this.props.location.pathname === "/" ? "active" : "inactive"}>
                                                Home
                                        </Link>

                                        </li>
                                        <li>
                                            <Link to="/about" className={this.props.location.pathname === "/about" ? "active" : "inactive"}>
                                                About Us
                                        </Link>
                                        </li>
                                       
                                        <li>
                                            <Link to="/campaign/list" className={this.props.location.pathname === "/campaign/list" ? "active" : "inactive"} >
                                                Campaign
                                        </Link>
                                        </li>

                                        <li>
                                            <Link to="/contact" className={this.props.location.pathname === "/contact" ? "active" : "inactive"}>
                                                Contact
                                        </Link>
                                        </li>

                                        {/* {!AuthenticationService.getToken() && <li>
                                            <Link to="/login" className="actives">
                                                Login
                                        </Link>
                                        </li>} */}

                                        {/* {AuthenticationService.getToken() && <li>
                                            <Link to="/dashboard" className={this.props.location.pathname === "/dashboard" ? "active" : "inactive"}>
                                                Dashboard
                                        </Link>
                                        </li>} */}
                                        {/* {AuthenticationService.getToken() && <li>
                                            <a onClick={() => this.logout()} className="actives">
                                                Logout
                                        </a>
                                        </li>} */}

                                        {AuthenticationService.getToken() && <li>
                                            <Link to="/" className="actives">
                                                Hi {AuthenticationService.getName()}
                                            </Link>
                                            <ul>
                                                <li>
                                                    <a onClick={() => this.logout()} className="actives">
                                                        Logout
                                        </a>
                                                </li>
                                                {AuthenticationService.getAdminStatus() && <li>
                                                    <Link to="/dashboard" className={this.props.location.pathname === "/dashboard" ? "active" : "inactive"}>
                                                        Dashboard
                                                    </Link>
                                                </li>}
                                            </ul>
                                        </li>}

                                    </ul>
                                </nav>
                            </div>

                            <div className="col-md-2 col-sm-2 col-2">
                                <div>
                                    <div className="mobileMenu ">
                                        <ul className="responsivemenu">
                                            <li>
                                                <p>Home<i className="fa fa-angle-right" aria-hidden="true" /></p>
                                                <div className="collapse" aria-expanded="false">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <ul>
                                                                <li><a className="active" href="/home">Home style 1</a></li>
                                                                <li><a className="active" href="/home2">Home style 2</a></li>
                                                                <li><a className="active" href="/home3">Home style 3</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li><a href="/about">About</a></li>
                                            <li><a href="/contact">Contact</a></li>
                                        </ul>
                                    </div>
                                    <div className="showmenu"><i className="fa fa-bars" aria-hidden="true" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix" /></div>
                </div>
            </div>
        )
    };
}

export default withRouter(App);
