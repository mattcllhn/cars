import React, { Component } from 'react';
import './login.scss';
class Login extends Component {
    render() {
        return (
            <div className="vol-page-wrapper">
                <div className="form-wrapper" >
                    <form className="volunteer-form" noValidate>
                        <legend> Login</legend>
                        <fieldset>
                                <label htmlFor="email_address_id">Email Address</label>
                                <input id="email_address_id" type="text" />
                                <label htmlFor="password_id">Password</label>
                                <input id="password_id" type="password" />
                                <label htmlFor="show_password_id">
                                    <input id="show_password_id" type="checkbox" />
                                    <span>Show Password</span>
                                </label>

                        </fieldset>
                        <button type="submit">Let's go!</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;