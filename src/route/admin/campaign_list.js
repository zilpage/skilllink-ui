import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import Navigation from './../../component/navigation/header';
import Footer from './../../component/navigation/footer';

import AppService from './../../service/app_service'

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
                        this.setState({  loading: false, result: null })
                        this.getCampaigns();
                    }
                })
        })
    }

    getCampaigns = () => {
        AppService.getCampaigns().then(response => {
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
                        this.setState({  loading: false, result: null })
                        this.getCampaigns();
                    }
                })
        })
    }


    


    render() {
        const {result} = this.state;
        return (
            <div className="App" id="scrool">
                <div className="App">
                    <Navigation />
                    {/* <div className="wpo-breadcumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="wpo-breadcumb-wrap">
                                    <h2>Campaigns</h2>
                                    <ul>
                                        <li><a href="/home">Home</a></li>
                                        <li><span>Event</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                    <div className="wpo-event-area wpo-event-area2 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="wpo-section-title">
                                        <span>Campaigns</span>
                                        <h2>Campaign List</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div style={{ width: '60%', marginLeft: '20%', marginBottom: '50px' }}>
                                        <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3">
                                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                                <div className="MuiFormControl-root MuiTextField-root inputOutline MuiFormControl-fullWidth">
                                                    <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined" data-shrink="true">Title</label>
                                                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl">
                                                        <input aria-invalid="false" name="title" onChange={this.handleChange} placeholder="Title" type="text" className="MuiInputBase-input MuiOutlinedInput-input" />
                                                        <fieldset aria-hidden="true" className="jss1 MuiOutlinedInput-notchedOutline">
                                                            <legend className="jss3 jss4"><span>Title</span></legend>
                                                        </fieldset>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                                <div className="MuiFormControl-root MuiTextField-root inputOutline MuiFormControl-fullWidth">
                                                    <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined" data-shrink="true">Goal</label>
                                                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl">
                                                        <input aria-invalid="false" name="goal" onChange={this.handleChange} placeholder="Goal" type="number" className="MuiInputBase-input MuiOutlinedInput-input" />
                                                        <fieldset aria-hidden="true" className="jss1 MuiOutlinedInput-notchedOutline">
                                                            <legend className="jss3 jss4"><span>Goal</span></legend>
                                                        </fieldset>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                                <div className="MuiFormControl-root MuiTextField-root inputOutline MuiFormControl-fullWidth">
                                                    <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined" data-shrink="true">Cover Photo</label>
                                                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl">
                                                        <input aria-invalid="false" name="coverPhoto" onChange={this.handleChange} placeholder="Cover photo" type="text" className="MuiInputBase-input MuiOutlinedInput-input" />
                                                        <fieldset aria-hidden="true" className="jss1 MuiOutlinedInput-notchedOutline">
                                                            <legend className="jss3 jss4"><span>Cover Photo</span></legend>
                                                        </fieldset>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                                <div className="MuiFormControl-root MuiTextField-root inputOutline MuiFormControl-fullWidth">
                                                    <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined" data-shrink="true">Category</label>
                                                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl">
                                                        <input aria-invalid="false" name="category" onChange={this.handleChange} placeholder="Category" type="text" className="MuiInputBase-input MuiOutlinedInput-input" />
                                                        <fieldset aria-hidden="true" className="jss1 MuiOutlinedInput-notchedOutline">
                                                            <legend className="jss3 jss4"><span>Category</span></legend>
                                                        </fieldset>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                                <div className="MuiFormControl-root MuiTextField-root inputOutline MuiFormControl-fullWidth">
                                                    <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined" data-shrink="true">Ownership</label>
                                                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl">
                                                        <input aria-invalid="false" name="ownership" onChange={this.handleChange} placeholder="Ownership" type="text" className="MuiInputBase-input MuiOutlinedInput-input" />
                                                        <fieldset aria-hidden="true" className="jss1 MuiOutlinedInput-notchedOutline">
                                                            <legend className="jss3 jss4"><span>Ownership</span></legend>
                                                        </fieldset>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                                <div className="MuiFormControl-root MuiTextField-root inputOutline MuiFormControl-fullWidth">
                                                    <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined" data-shrink="true">Raise As</label>
                                                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl">
                                                        <input aria-invalid="false" name="raiseAs" onChange={this.handleChange} placeholder="Ownership" type="text" className="MuiInputBase-input MuiOutlinedInput-input" />
                                                        <fieldset aria-hidden="true" className="jss1 MuiOutlinedInput-notchedOutline">
                                                            <legend className="jss3 jss4"><span>Raise As</span></legend>
                                                        </fieldset>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                                <div className="MuiFormControl-root MuiTextField-root inputOutline MuiFormControl-fullWidth">
                                                    <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined" data-shrink="true">Story</label>
                                                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl">
                                                        <textarea aria-invalid="false" name="story" onChange={this.handleChange} placeholder="Story" type="text" className="MuiInputBase-input MuiOutlinedInput-input" />
                                                        <fieldset aria-hidden="true" className="jss1 MuiOutlinedInput-notchedOutline">
                                                            <legend className="jss3 jss4"><span>Story</span></legend>
                                                        </fieldset>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                                <div className="MuiGrid-root formFooter">
                                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-text cBtn cBtnLarge cBtnTheme MuiButton-fullWidth" onClick={() => this.createCampaign()} tabIndex={0} ><span className="MuiButton-label">Create Campaign</span><span className="MuiTouchRipple-root" /></button>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {
                                    result && result.list && result.list.length > 0 && result.list.map((item, i) => {
                                        return <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                                            <div className="wpo-event-item">
                                                <div className="wpo-event-img">
                                                    <img src="/static/media/img-1.77053a87.jpg" alt="" />
                                                    <div className="thumb-text"><span>25</span><span>NOV</span></div>
                                                </div>
                                                <div className="wpo-event-text">
                                                    <h2>{item.title}</h2>
                                                    <ul>
                                                        <li><i className="fa fa-clock-ow" aria-hidden="true" />Goal</li>
                                                        <li><i className="fi flaticon-pinsw" />N{item.goal.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</li>
                                                        
                                                    </ul>
                                                    <p>{item.story}</p>
                                                    {!item.enabled && <button className="MuiButtonBase-root MuiButton-root MuiButton-text cBtn cBtnLarge cBtnTheme MuiButton-fullWidth" onClick={() => this.activateCampaign(item, true)} tabIndex={0} ><span className="MuiButton-label">Activate</span><span className="MuiTouchRipple-root" /></button>}
                                                    <Link to="/campaign/detail">Learn More...</Link>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                                    <div className="wpo-event-item">
                                        <div className="wpo-event-img">
                                            <img src="/static/media/img-1.77053a87.jpg" alt="" />
                                            <div className="thumb-text"><span>25</span><span>NOV</span></div>
                                        </div>
                                        <div className="wpo-event-text">
                                            <h2>Education for All Children</h2>
                                            <ul>
                                                <li><i className="fa fa-clock-ow" aria-hidden="true" />Goal</li>
                                                <li><i className="fi flaticon-pinsw" />N450,000</li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                            <Link to="/campaign/detail">Learn More...</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer />


                    <div className="col-lg-12">
                        <div className="header-menu">
                            <ul className="smothscroll">
                                <li><a href="#scrool"><i className="fa fa-arrow-up" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="Toastify" /></div>
        )
    };
}

export default App;
