import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import Navigation from './../../component/navigation/header';
import Footer from './../../component/navigation/footer';

import AppService from './../../service/app_service'
import AuthenticationService from './../../service/authentication_service'
import UrlService from './../../service/url_service';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            result: null,
        }
    }

    componentDidMount() {
        this.getCampaigns();

    }

    uploadonly = (e) => {
        let file = null;
        if (e.target.files.length) {
            const arrFiles = Array.from(e.target.files)
            const files = arrFiles.map((file, index) => {
                const src = window.URL.createObjectURL(file)
                return { file, id: index, src }
            })
            file = files[0].file;
        }
        console.log(file);
        this.setState({ loading: true })
        let data = {
            upload: file
        }
        AppService.uploadonly(data)
            .then(response => {
                // console.log(data);
                this.setState({ loading: false })
                if (response.code) {
                    alert(response.description)
                } else {
                    this.setState({ coverPhoto: response.description })
                    alert('file upload successful')
                }
            })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

    }
    createCampaign = () => {
        AppService.createCampaign(this.state).then(response => {
            this.setState({ loadingMessage: null, loading: false },
                () => {
                    console.log(response);
                    if (response.code) {
                        alert(response.description)
                        this.setState({ errors: response.errors, loading: false })
                    } else {
                        this.setState({ loading: false, result: null })
                        alert("Successfully created")
                        this.getCampaigns();
                    }
                })
        })
    }

    getCampaigns = () => {
        AppService.getAdminCampaigns().then(response => {
            this.setState({ loadingMessage: null, loading: false },
                () => {
                    console.log(response);
                    if (response.code) {
                        alert(response.description)
                        this.setState({ errors: response.errors, loading: false })
                    } else {
                        this.setState({ result: response, loading: false, })
                    }
                })
        })
    }

    activateCampaign = (data, status) => {
        data.enabled = status;
        AppService.activateCampaign(data).then(response => {
            this.setState({ loadingMessage: null, loading: false },
                () => {
                    console.log(response);
                    if (response.code) {
                        alert(response.description)
                        this.setState({ errors: response.errors, loading: false })
                    } else {
                        this.setState({ loading: false, result: null })
                        alert(status ? "Successfully activated" : "Successfully Deactivated")
                        this.getCampaigns();
                    }
                })
        })
    }





    render() {
        const { result } = this.state;
        return (
            <div className="App">


                <Navigation />

                <div className="wpo-breadcumb-area" style={{ maxHeight: '40px', minHeight: '150px' }} >
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="wpo-breadcumb-wrap">
                                    <h2>Dashboard</h2>
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
                        <h3 style={{ marginBottom: '40px', textAlign: 'center' }} >Campaigns</h3>
                        <div className="wpo-mission-wrap">
                            <div className="row">
                                {
                                    result && result.list && result.list.length > 0 && result.list.map((item, i) => {
                                        return <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid" key={i} style={{ marginTop: '45px' }} >
                                            <div className="wpo-event-item">
                                                <div className="wpo-event-img">
                                                    <img src={UrlService.FILE_BASE_PATH + item.coverPhoto} alt="" />
                                                    {/* <div className="thumb-text"><span>25</span><span>NOV</span></div> */}
                                                </div>
                                                <div className="wpo-event-text slide-caption">
                                                    <h2>{item.title}</h2>
                                                    <ul>
                                                        <li><i className="fa fa-clock-ow" aria-hidden="true" />Goal</li>
                                                        <li><i className="fi flaticon-pinsw" />N{item.goal.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</li>

                                                    </ul>
                                                    <p>{item.story}</p>
                                                    {!item.enabled && <button className="MuiButtonBase-root MuiButton-root MuiButton-text cBtn cBtnSmall cBtnThemer MuiButton-halfWidth" style={{ float: 'right', 'backgroundColor': 'green', color: 'white' }} onClick={() => this.activateCampaign(item, true)} tabIndex={0} ><span className="MuiButton-label">Activate</span><span className="MuiTouchRipple-root" /></button>}
                                                    {item.enabled && <button className="MuiButtonBase-root MuiButton-root MuiButton-text cBtn cBtnSmall cBtnThemer MuiButton-halfWidth" style={{ float: 'right', 'backgroundColor': 'green', color: 'white' }} onClick={() => this.activateCampaign(item, false)} tabIndex={0} ><span className="MuiButton-label">Deactivate</span><span className="MuiTouchRipple-root" /></button>}
                                                    <br />
                                                    <Link to={"/campaign/detail/"+item.id}>Learn More...</Link>
                                                    <div className="btns" >
                                                        <Link className="theme-btn" to="/donate" style={{ color: 'white' }} >Donate Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>


                <div className="wpo-counter-area undefined">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3 style={{color: 'white', textAlign: 'center'}}>Statistics</h3>
                                <div className="wpo-mission-wrap row">
                                    {
                                        result && result.dashboard && result.dashboard.items && result.dashboard.items.length > 0 && result.dashboard.items.map((item, i) => {
                                            return  <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid" style={{marginTop: '40px'}}>
                                            <div className="wpo-mission-item">
                                                <div className="wpo-mission-content">
                                                    <h2>{parseFloat(item.value).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h2>
                                                    <p>{item.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                        })
                                    }
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />>
            <div className="col-lg-12">
                    <div className="header-menu">
                        <ul className="smothscroll">
                            <li><a href="#scrool"><i className="fa fa-arrow-up" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    };
}

export default App;
