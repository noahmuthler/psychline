import React from "react"
import ReactDOM from "react-dom"
import './SignUp.css';
<link href="https://fonts.googleapis.com/css?family=Cardo:400,700|Oswald" rel="stylesheet"></link>

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {


    }

    render() {
        return (
<<<<<<< HEAD
            <body>
                <div class="heading">
                    <h1>Create Account</h1>
                    <p>Registering is really simple, just imput the required fields and your good to go! *Required</p>
                </div>
                <form >
                    <div class="grid-container-account">
                        <div class="left-item">
                            <h2>Account Details</h2>
                            <label>Email Address<br />
                                <input
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                /><br />
                            </label>

                            <label>Username<br />
                                <input
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                /><br />
                            </label>
=======
            <form >
                <h2>Account Details</h2>
                <label>Email Address<br />
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    /><br />
                </label>
>>>>>>> parent of 36dfde2... Update SignUp.js

                <label>Username<br />
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange}
                    /><br />
                </label>

                <label>Password<br />
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    /><br />
                </label>

                <label>Confirm Password<br />
                    <input
                        type="password"
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                    /><br />
                </label>


                <h2>Profile Details</h2>
                <label>Name:<br />
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}

                    /><br />

                </label>
            </form>
        );
    }
}

export default SignUp;