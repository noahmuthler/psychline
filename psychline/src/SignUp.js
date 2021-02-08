import React from "react"
import ReactDOM from "react-dom"

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
            <form >
                <h2>Account Details</h2>
                <label>Email Address{'\n'}
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </label>

                <label>Username{'\n'}
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                </label>

                <label>Password{'\n'}
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </label>

                <label>Confirm Password{'\n'}
                    <input
                        type="password"
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                    />
                </label>


                <h2>Profile Details</h2>
                <label>Name: {'/n'}
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}

                    />


                </label>
            </form>
        );
    }
}

export default SignUp;