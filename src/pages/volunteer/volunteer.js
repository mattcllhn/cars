import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './volunteer.scss'; 
class Volunteer extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName:{
                value:'',
                isValid:false,
                showError:true,
                required:true
            }
        }
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(e){
        console.log(e.currentTarget.value);
        let fname =  {
            value: e.currentTarget.value,
            isValid:false,
            showError:false,
            required:true
            };
        let newState = this.state;
        newState.firstName = fname;
        this.setState(newState);
        console.log(this.state)
    }
    signUp(e){
        e.preventDefault();
        e.stopPropagation();
        alert('signup clicked!!');
    }
    render() {
        return (
            <div className= "vol-page-wrapper">
                <div className = "form-wrapper" >
                    <form onSubmit={this.signUp} className = "volunteer-form" noValidate>
                        <legend> Become a volunteer</legend>
                        <fieldset>
                            <div className = "col-12">
                                <label htmlFor = "first_name_id">First Name</label>
                                <input onChange={this.validate } onBlur={this.validate } id = "first_name_id" type = "text"/>
                                {this.state.firstName.showError ? 
                                <div> error! </div>
                                : null}

                                <label htmlFor="last_name_id">Last Name</label>
                                <input id="last_name_id" type="text"/>
                                <label htmlFor="email_address">Email Address</label>
                                <input id="email_address" type="text"/>
                            </div>
                        </fieldset>
                        <p>Already signed up? Click here to <Link to ="/login">Login</Link></p>
                        <button type = "submit">Let's go!</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Volunteer;