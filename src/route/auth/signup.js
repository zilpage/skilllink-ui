import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import AppService from './../../service/app_service'
import AuthenticationService from './../../service/authentication_service'


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pageNumber: 1,
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

    }
    signup = () => {
        AppService.signup(this.state).then(response => {
            this.setState({ loadingMessage: null, loading: false },
                () => {
                    console.log(response);
                    if (response.code) {
                        alert(response.description)
                        this.setState({ errors: response.errors, loading: false })
                    } else {
                        this.setState({  loading: false, })
                        this.props.history.push('/login')
                    }
                })
        })
    }


    render() {
        return (
            <div className="App" id="scrool">
                <div className="App">
                    <div className="MuiGrid-root loginWrapper">
                        <div className="MuiGrid-root loginForm">
                            <h2>Signup</h2>
                            <p>Signup your account</p>
                            <div>
                                <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3">
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6">
                                        <div className="MuiFormControl-root MuiTextField-root inputOutline MuiFormControl-fullWidth">
                                            <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined" data-shrink="true">First Name</label>
                                            <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl">
                                                <input aria-invalid="false" name="firstName" onChange={this.handleChange} placeholder="First Name" type="text" className="MuiInputBase-input MuiOutlinedInput-input" />
                                                <fieldset aria-hidden="true" className="jss1 MuiOutlinedInput-notchedOutline">
                                                    <legend className="jss3 jss4"><span>First Name</span></legend>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6">
                                        <div className="MuiFormControl-root MuiTextField-root inputOutline MuiFormControl-fullWidth">
                                            <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined" data-shrink="true">First Name</label>
                                            <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl">
                                                <input aria-invalid="false" name="lasttName" onChange={this.handleChange} placeholder="First Name" type="text" className="MuiInputBase-input MuiOutlinedInput-input" />
                                                <fieldset aria-hidden="true" className="jss1 MuiOutlinedInput-notchedOutline">
                                                    <legend className="jss3 jss4"><span>Last Name</span></legend>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                        <div className="MuiFormControl-root MuiTextField-root inputOutline MuiFormControl-fullWidth">
                                            <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined" data-shrink="true">E-mail</label>
                                            <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl">
                                                <input aria-invalid="false" name="emailAddress" onChange={this.handleChange} placeholder="E-mail" type="text" className="MuiInputBase-input MuiOutlinedInput-input" />
                                                <fieldset aria-hidden="true" className="jss1 MuiOutlinedInput-notchedOutline">
                                                    <legend className="jss3 jss4"><span>E-mail</span></legend>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                        <div className="MuiFormControl-root MuiTextField-root inputOutline MuiFormControl-fullWidth">
                                            <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-filled" data-shrink="true">Username</label>
                                            <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl">
                                                <input aria-invalid="false" name="username" onChange={this.handleChange} placeholder="Username" type="text" className="MuiInputBase-input MuiOutlinedInput-input" />
                                                <fieldset aria-hidden="true" className="jss1 MuiOutlinedInput-notchedOutline">
                                                    <legend className="jss3 jss4"><span>Username</span></legend>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                        <div className="MuiFormControl-root MuiTextField-root inputOutline MuiFormControl-fullWidth">
                                            <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined" data-shrink="true">Password</label>
                                            <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl">
                                                <input aria-invalid="false" name="password" onChange={this.handleChange} placeholder="Password" type="text" className="MuiInputBase-input MuiOutlinedInput-input" />
                                                <fieldset aria-hidden="true" className="jss1 MuiOutlinedInput-notchedOutline">
                                                    <legend className="jss3 jss4"><span>Password</span></legend>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                        <div className="MuiGrid-root formFooter"><button className="MuiButtonBase-root MuiButton-root MuiButton-text cBtn cBtnLarge cBtnTheme MuiButton-fullWidth" tabIndex={0} onClick={() => this.signup()} ><span className="MuiButton-label">Sign Up</span><span className="MuiTouchRipple-root" /></button></div>

                                        <p className="noteHelp">Already have an account? <Link to="/login">Return to Sign In</Link></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="Toastify" /></div>
        )
    };
}

export default App;
