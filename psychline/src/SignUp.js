import react from "react"
import reactDOM from "react-dom"

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {


    }

    render() {
        return (
            <form >
                <h2>Account Details</h2>
                <label>Email Address{"\n"}
                    <input
                        name="email"
                        type="email"
                        value={this.state.value}
                        onChange={this.handleChange}




                    />
                </label>
            </form>
        );
    }
}