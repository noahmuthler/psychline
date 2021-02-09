import React from "react"
import ReactDOM from "react-dom"
import './SignUp.css';

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) { }

    render() {
        return (
            <body >
                <div class="heading" >
                    <h1> Create Account </h1>
                    <p> Registering is really simple, just imput the required fields and your good to go! * Required </p>
                </div >
                <form >
                    <div class="grid-container-account" >
                        <div class="left-item" >
                            <h2 > Account Details </h2>  <label > Email Address < br />
                                <input
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />  <br />
                            </label>

                            <label > Username < br />
                                <input
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                /><br />
                            </label>

                            <label > Password < br />
                                <input
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                /><br />
                            </label>

                            <label > Confirm Password < br />
                                <input
                                    type="password"
                                    value={this.state.confirmPassword}
                                    onChange={this.handleChange}
                                /><br />
                            </label> </div >

                        <div class="right-item" >
                            <h2> Profile Details </h2>
                            <label> Name < br />
                                <input
                                    type="text"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                /><br />
                            </label>

                            <label> Date of Birth < br />
                                <input
                                    type="date"
                                    value={this.state.dob}
                                    onChange={this.handleChange}
                                /><br />
                            </label>

                            <label > Gender < br />
                                <select
                                    value={this.state.gender}
                                    onChange={this.handleChange} >
                                    <option value="male" > Male </option>
                                    <option value="female" > female </option>
                                    <option value="other" > Other </option>
                                </select > < br />
                            </label>

                            <label > Country < br />
                                <select
                                    value={this.state.country}
                                    onChange={this.handleChange} >
                                </select> < br />
                            </label>

                            <label > City < br />
                                <input
                                    type="text"
                                    value={this.state.city}
                                    onChange={this.handleChange}
                                /><br />
                            </label>

                            <label > Terms of Service < br />
                                <input
                                    type="checkbox"
                                    checked={this.state.tos}
                                    onChange={this.handleChange}
                                />
                            </label >
                        </div>
                    </div>
                </form >
            </body>
        );
    }
}


export default SignUp;