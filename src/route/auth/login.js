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
    login = () => {
        let data = {};
        data.username = this.state.username;
        data.password = this.state.password;
        AppService.login(data).then(response => {
            this.setState({ loadingMessage: null, loading: false },
                () => {
                    console.log(response);
                    if (response.code) {
                        alert(response.description)
                        this.setState({ errors: response.errors, loading: false })
                    } else {
                        this.setState({ banks: response, loading: false, })
                        AuthenticationService.setSession(response.AccessToken, response.Id, response.Name);
                        if(response.Role && response.Role.name === "SUPER_ADMIN"){
                            AuthenticationService.setAdminStatus(true);
                        }
                        this.props.history.push('/dashboard')
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
                            <h2>Sign In</h2>
                            <p>Sign in to your account</p>
                            <div>
                                <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3">
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
                                            <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-filled" data-shrink="true">Password</label>
                                            <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl">
                                                <input aria-invalid="false" name="password" onChange={this.handleChange} placeholder="Password" type="password" className="MuiInputBase-input MuiOutlinedInput-input" />
                                                <fieldset aria-hidden="true" className="jss1 MuiOutlinedInput-notchedOutline">
                                                    <legend className="jss3 jss4"><span>Password</span></legend>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                        <div className="MuiGrid-root formAction">
                                            <label className="MuiFormControlLabel-root">
                                                <span className="MuiButtonBase-root MuiIconButton-root jss5 MuiCheckbox-root MuiCheckbox-colorSecondary MuiIconButton-colorSecondary" aria-disabled="false">
                                                    <span className="MuiIconButton-label">

                                                    </span>
                                                    <span className="MuiTouchRipple-root" /></span>
                                            </label>
                                            <Link to="/">Return Home?</Link>
                                        </div>
                                        <div className="MuiGrid-root formFooter"><button className="MuiButtonBase-root MuiButton-root MuiButton-text cBtnTheme MuiButton-fullWidth" tabIndex={0}  onClick={() => this.login()} ><span className="MuiButton-label">Login</span><span className="MuiTouchRipple-root" /></button></div>

                                        <p className="noteHelp">Don't have an account? <Link to="/signup">Create free account</Link></p>
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
