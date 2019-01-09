import React, { Component } from 'react';
import './volunteer.scss'; 
class Volunteer extends Component {
    render() {
        return (
            <div className= "vol-page-wrapper">
                <div className = "form-wrapper" >
                    <form className = "volunteer-form" noValidate>
                        <legend> form legend</legend>
                        <fieldset>
                            {/* <div className = "row"> */}
                                <div className = "col-12">
                                    <label htmlFor = "first_name_id">First Name</label>
                                    <input id = "first_name_id" type = "text"/>
                                {/* </div> */}
                                {/* <div className="col-12"> */}
                                    <label htmlFor="last_name_id">Last Name</label>
                                    <input id="last_name_id" type="text" />
                                {/* </div> */}
                            </div>
                        </fieldset>
                        <button type = "submit">Let's go!</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Volunteer;