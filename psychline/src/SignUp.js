import React from "react"
import './SignUp.css';
import Navbar from "./components/Navbar/Navbar"
import { MenuItems } from "./components/Navbar/MenuItems";
import { Button } from "./components/Button"
import LoginButton from './components/Home/LoginButton'
import Footer from "./components/Home/Footer";
import { Input, InputLabel, withStyles, FormControl, TextField, Select, MenuItem, FormControlLabel, Checkbox } from '@material-ui/core'

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
    },
    formControlSelect: {
        margin: theme.spacing(0),
        minWidth: 120,
    },
});

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) { }

    render() {
        const { classes } = this.props;
        return (
            <body>
                <Navbar />
                <div class="heading" >
                    <h1 class="heading_item"> Create Account </h1>
                    <p class="heading_item"> Registering is really simple, just imput the required fields and your good to go! * Required </p>
                </div >
                <form >
                    <div class="grid-container-account" >
                        <div class="left-item" >
                            <h2 > Account Details </h2>
                            <div className={classes.container}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel>Email Address</InputLabel>
                                    <Input
                                        id="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                </FormControl><br />
                            </div>

                            <div className={classes.container}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel>Username</InputLabel>
                                    <Input
                                        id="username"
                                        value={this.state.username}
                                        onChange={this.handleChange}
                                    />
                                </FormControl><br />
                            </div>

                            <div className={classes.container}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel>Password</InputLabel>
                                    <Input
                                        id="password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    />
                                </FormControl><br />
                            </div>

                            <div className={classes.container}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel>Confirm Password</InputLabel>
                                    <Input
                                        id="confirmPassword"
                                        value={this.state.confirmPassword}
                                        onChange={this.handleChange}
                                    />
                                </FormControl><br />
                            </div>
                        </div>

                        <div class="right-item" >
                            <h2> Profile Details </h2>
                            <div className={classes.container}>
                                <FormControl className={classes.fromControl}>
                                    <InputLabel>Name</InputLabel>
                                    <Input
                                        id="name"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                    />
                                </FormControl>< br />
                            </div><br />

                            <TextField
                                id="dob"
                                label="Birthday"
                                type="date"
                                value={this.state.dob}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            /><br /><br />

                            <FormControl className={classes.formControlSelect}>
                                <InputLabel>Gender</InputLabel>
                                <Select
                                    labelId="gender_label"
                                    id="gender"
                                    value={this.state.gender}
                                    onChange={this.handleChange}
                                >
                                    <MenuItem value={"male"}>Male</MenuItem>
                                    <MenuItem value={"female"}>Female</MenuItem>
                                    <MenuItem value={"other"}>Other</MenuItem>
                                </Select>
                            </FormControl><br /><br />

                            <FormControl className={classes.formControlSelect}>
                                <InputLabel>Country</InputLabel>
                                <Select
                                    labelId="country_label"
                                    id="country"
                                    value={this.state.country}
                                    onChange={this.handleChange}
                                >
                                    <MenuItem value="null"></MenuItem>
                                    <MenuItem value="Afganistan">Afghanistan</MenuItem>
                                    <MenuItem value="Albania">Albania</MenuItem>
                                    <MenuItem value="Algeria">Algeria</MenuItem>
                                    <MenuItem value="American Samoa">American Samoa</MenuItem>
                                    <MenuItem value="Andorra">Andorra</MenuItem>
                                    <MenuItem value="Angola">Angola</MenuItem>
                                    <MenuItem value="Anguilla">Anguilla</MenuItem>
                                    <MenuItem value="Antigua+Barbuda">Antigua and Barbuda</MenuItem>
                                    <MenuItem value="Argentina">Argentina</MenuItem>
                                    <MenuItem value="Armenia">Armenia</MenuItem>
                                    <MenuItem value="Aruba">Aruba</MenuItem>
                                    <MenuItem value="Australia">Australia</MenuItem>
                                    <MenuItem value="Austria">Austria</MenuItem>
                                    <MenuItem value="Azerbaijan">Azerbaijan</MenuItem>
                                    <MenuItem value="Bahamas">Bahamas</MenuItem>
                                    <MenuItem value="Bahrain">Bahrain</MenuItem>
                                    <MenuItem value="Bangladesh">Bangladesh</MenuItem>
                                    <MenuItem value="Barbados">Barbados</MenuItem>
                                    <MenuItem value="Belarus">Belarus</MenuItem>
                                    <MenuItem value="Belgium">Belgium</MenuItem>
                                    <MenuItem value="Belize">Belize</MenuItem>
                                    <MenuItem value="Benin">Benin</MenuItem>
                                    <MenuItem value="Bermuda">Bermuda</MenuItem>
                                    <MenuItem value="Bhutan">Bhutan</MenuItem>
                                    <MenuItem value="Bolivia">Bolivia</MenuItem>
                                    <MenuItem value="Bonaire">Bonaire</MenuItem>
                                    <MenuItem value="Bosnia+Herzegovina">Bosnia and Herzegovina</MenuItem>
                                    <MenuItem value="Botswana">Botswana</MenuItem>
                                    <MenuItem value="Brazil">Brazil</MenuItem>
                                    <MenuItem value="British Indian Ocean Ter">British Indian Ocean Ter</MenuItem>
                                    <MenuItem value="Brunei">Brunei</MenuItem>
                                    <MenuItem value="Bulgaria">Bulgaria</MenuItem>
                                    <MenuItem value="Burkina Faso">Burkina Faso</MenuItem>
                                    <MenuItem value="Burundi">Burundi</MenuItem>
                                    <MenuItem value="Cambodia">Cambodia</MenuItem>
                                    <MenuItem value="Cameroon">Cameroon</MenuItem>
                                    <MenuItem value="Canada">Canada</MenuItem>
                                    <MenuItem value="Canary Islands">Canary Islands</MenuItem>
                                    <MenuItem value="Cape Verde">Cape Verde</MenuItem>
                                    <MenuItem value="Cayman Islands">Cayman Islands</MenuItem>
                                    <MenuItem value="Central African Republic">Central African Republic</MenuItem>
                                    <MenuItem value="Chad">Chad</MenuItem>
                                    <MenuItem value="Channel Islands">Channel Islands</MenuItem>
                                    <MenuItem value="Chile">Chile</MenuItem>
                                    <MenuItem value="China">China</MenuItem>
                                    <MenuItem value="Christmas Island">Christmas Island</MenuItem>
                                    <MenuItem value="Cocos Island">Cocos Island</MenuItem>
                                    <MenuItem value="Colombia">Colombia</MenuItem>
                                    <MenuItem value="Comoros">Comoros</MenuItem>
                                    <MenuItem value="Congo">Congo</MenuItem>
                                    <MenuItem value="Cook Islands">Cook Islands</MenuItem>
                                    <MenuItem value="Costa Rica">Costa Rica</MenuItem>
                                    <MenuItem value="Cote DIvoire">Cote DIvoire</MenuItem>
                                    <MenuItem value="Croatia">Croatia</MenuItem>
                                    <MenuItem value="Cuba">Cuba</MenuItem>
                                    <MenuItem value="Curaco">Curacao</MenuItem>
                                    <MenuItem value="Cyprus">Cyprus</MenuItem>
                                    <MenuItem value="Czech Republic">Czech Republic</MenuItem>
                                    <MenuItem value="Denmark">Denmark</MenuItem>
                                    <MenuItem value="Djibouti">Djibouti</MenuItem>
                                    <MenuItem value="Dominica">Dominica</MenuItem>
                                    <MenuItem value="Dominican Republic">Dominican Republic</MenuItem>
                                    <MenuItem value="East Timor">East Timor</MenuItem>
                                    <MenuItem value="Ecuador">Ecuador</MenuItem>
                                    <MenuItem value="Egypt">Egypt</MenuItem>
                                    <MenuItem value="El Salvador">El Salvador</MenuItem>
                                    <MenuItem value="Equatorial Guinea">Equatorial Guinea</MenuItem>
                                    <MenuItem value="Eritrea">Eritrea</MenuItem>
                                    <MenuItem value="Estonia">Estonia</MenuItem>
                                    <MenuItem value="Ethiopia">Ethiopia</MenuItem>
                                    <MenuItem value="Falkland Islands">Falkland Islands</MenuItem>
                                    <MenuItem value="Faroe Islands">Faroe Islands</MenuItem>
                                    <MenuItem value="Fiji">Fiji</MenuItem>
                                    <MenuItem value="Finland">Finland</MenuItem>
                                    <MenuItem value="France">France</MenuItem>
                                    <MenuItem value="French Guiana">French Guiana</MenuItem>
                                    <MenuItem value="French Polynesia">French Polynesia</MenuItem>
                                    <MenuItem value="French Southern Ter">French Southern Ter</MenuItem>
                                    <MenuItem value="Gabon">Gabon</MenuItem>
                                    <MenuItem value="Gambia">Gambia</MenuItem>
                                    <MenuItem value="Georgia">Georgia</MenuItem>
                                    <MenuItem value="Germany">Germany</MenuItem>
                                    <MenuItem value="Ghana">Ghana</MenuItem>
                                    <MenuItem value="Gibraltar">Gibraltar</MenuItem>
                                    <MenuItem value="Great Britain">Great Britain</MenuItem>
                                    <MenuItem value="Greece">Greece</MenuItem>
                                    <MenuItem value="Greenland">Greenland</MenuItem>
                                    <MenuItem value="Grenada">Grenada</MenuItem>
                                    <MenuItem value="Guadeloupe">Guadeloupe</MenuItem>
                                    <MenuItem value="Guam">Guam</MenuItem>
                                    <MenuItem value="Guatemala">Guatemala</MenuItem>
                                    <MenuItem value="Guinea">Guinea</MenuItem>
                                    <MenuItem value="Guyana">Guyana</MenuItem>
                                    <MenuItem value="Haiti">Haiti</MenuItem>
                                    <MenuItem value="Hawaii">Hawaii</MenuItem>
                                    <MenuItem value="Honduras">Honduras</MenuItem>
                                    <MenuItem value="Hong Kong">Hong Kong</MenuItem>
                                    <MenuItem value="Hungary">Hungary</MenuItem>
                                    <MenuItem value="Iceland">Iceland</MenuItem>
                                    <MenuItem value="Indonesia">Indonesia</MenuItem>
                                    <MenuItem value="India">India</MenuItem>
                                    <MenuItem value="Iran">Iran</MenuItem>
                                    <MenuItem value="Iraq">Iraq</MenuItem>
                                    <MenuItem value="Ireland">Ireland</MenuItem>
                                    <MenuItem value="Isle of Man">Isle of Man</MenuItem>
                                    <MenuItem value="Israel">Israel</MenuItem>
                                    <MenuItem value="Italy">Italy</MenuItem>
                                    <MenuItem value="Jamaica">Jamaica</MenuItem>
                                    <MenuItem value="Japan">Japan</MenuItem>
                                    <MenuItem value="Jordan">Jordan</MenuItem>
                                    <MenuItem value="Kazakhstan">Kazakhstan</MenuItem>
                                    <MenuItem value="Kenya">Kenya</MenuItem>
                                    <MenuItem value="Kiribati">Kiribati</MenuItem>
                                    <MenuItem value="Korea North">Korea North</MenuItem>
                                    <MenuItem value="Korea Sout">Korea South</MenuItem>
                                    <MenuItem value="Kuwait">Kuwait</MenuItem>
                                    <MenuItem value="Kyrgyzstan">Kyrgyzstan</MenuItem>
                                    <MenuItem value="Laos">Laos</MenuItem>
                                    <MenuItem value="Latvia">Latvia</MenuItem>
                                    <MenuItem value="Lebanon">Lebanon</MenuItem>
                                    <MenuItem value="Lesotho">Lesotho</MenuItem>
                                    <MenuItem value="Liberia">Liberia</MenuItem>
                                    <MenuItem value="Libya">Libya</MenuItem>
                                    <MenuItem value="Liechtenstein">Liechtenstein</MenuItem>
                                    <MenuItem value="Lithuania">Lithuania</MenuItem>
                                    <MenuItem value="Luxembourg">Luxembourg</MenuItem>
                                    <MenuItem value="Macau">Macau</MenuItem>
                                    <MenuItem value="Macedonia">Macedonia</MenuItem>
                                    <MenuItem value="Madagascar">Madagascar</MenuItem>
                                    <MenuItem value="Malaysia">Malaysia</MenuItem>
                                    <MenuItem value="Malawi">Malawi</MenuItem>
                                    <MenuItem value="Maldives">Maldives</MenuItem>
                                    <MenuItem value="Mali">Mali</MenuItem>
                                    <MenuItem value="Malta">Malta</MenuItem>
                                    <MenuItem value="Marshall Islands">Marshall Islands</MenuItem>
                                    <MenuItem value="Martinique">Martinique</MenuItem>
                                    <MenuItem value="Mauritania">Mauritania</MenuItem>
                                    <MenuItem value="Mauritius">Mauritius</MenuItem>
                                    <MenuItem value="Mayotte">Mayotte</MenuItem>
                                    <MenuItem value="Mexico">Mexico</MenuItem>
                                    <MenuItem value="Midway Islands">Midway Islands</MenuItem>
                                    <MenuItem value="Moldova">Moldova</MenuItem>
                                    <MenuItem value="Monaco">Monaco</MenuItem>
                                    <MenuItem value="Mongolia">Mongolia</MenuItem>
                                    <MenuItem value="Montserrat">Montserrat</MenuItem>
                                    <MenuItem value="Morocco">Morocco</MenuItem>
                                    <MenuItem value="Mozambique">Mozambique</MenuItem>
                                    <MenuItem value="Myanmar">Myanmar</MenuItem>
                                    <MenuItem value="Nambia">Nambia</MenuItem>
                                    <MenuItem value="Nauru">Nauru</MenuItem>
                                    <MenuItem value="Nepal">Nepal</MenuItem>
                                    <MenuItem value="Netherland Antilles">Netherland Antilles</MenuItem>
                                    <MenuItem value="Netherlands">Netherlands (Holland, Europe)</MenuItem>
                                    <MenuItem value="Nevis">Nevis</MenuItem>
                                    <MenuItem value="New Caledonia">New Caledonia</MenuItem>
                                    <MenuItem value="New Zealand">New Zealand</MenuItem>
                                    <MenuItem value="Nicaragua">Nicaragua</MenuItem>
                                    <MenuItem value="Niger">Niger</MenuItem>
                                    <MenuItem value="Nigeria">Nigeria</MenuItem>
                                    <MenuItem value="Niue">Niue</MenuItem>
                                    <MenuItem value="Norfolk Island">Norfolk Island</MenuItem>
                                    <MenuItem value="Norway">Norway</MenuItem>
                                    <MenuItem value="Oman">Oman</MenuItem>
                                    <MenuItem value="Pakistan">Pakistan</MenuItem>
                                    <MenuItem value="Palau Island">Palau Island</MenuItem>
                                    <MenuItem value="Palestine">Palestine</MenuItem>
                                    <MenuItem value="Panama">Panama</MenuItem>
                                    <MenuItem value="Papua New Guinea">Papua New Guinea</MenuItem>
                                    <MenuItem value="Paraguay">Paraguay</MenuItem>
                                    <MenuItem value="Peru">Peru</MenuItem>
                                    <MenuItem value="Phillipines">Philippines</MenuItem>
                                    <MenuItem value="Pitcairn Island">Pitcairn Island</MenuItem>
                                    <MenuItem value="Poland">Poland</MenuItem>
                                    <MenuItem value="Portugal">Portugal</MenuItem>
                                    <MenuItem value="Puerto Rico">Puerto Rico</MenuItem>
                                    <MenuItem value="Qatar">Qatar</MenuItem>
                                    <MenuItem value="Republic of Montenegro">Republic of Montenegro</MenuItem>
                                    <MenuItem value="Republic of Serbia">Republic of Serbia</MenuItem>
                                    <MenuItem value="Reunion">Reunion</MenuItem>
                                    <MenuItem value="Romania">Romania</MenuItem>
                                    <MenuItem value="Russia">Russia</MenuItem>
                                    <MenuItem value="Rwanda">Rwanda</MenuItem>
                                    <MenuItem value="St Barthelemy">St Barthelemy</MenuItem>
                                    <MenuItem value="St Eustatius">St Eustatius</MenuItem>
                                    <MenuItem value="St Helena">St Helena</MenuItem>
                                    <MenuItem value="St Kitts-Nevis">St Kitts-Nevis</MenuItem>
                                    <MenuItem value="St Lucia">St Lucia</MenuItem>
                                    <MenuItem value="St Maarten">St Maarten</MenuItem>
                                    <MenuItem value="St Pierre+Miquelon">St Pierre and Miquelon</MenuItem>
                                    <MenuItem value="St Vincent+Grenadines">St Vincent and Grenadines</MenuItem>
                                    <MenuItem value="Saipan">Saipan</MenuItem>
                                    <MenuItem value="Samoa">Samoa</MenuItem>
                                    <MenuItem value="Samoa American">Samoa American</MenuItem>
                                    <MenuItem value="San Marino">San Marino</MenuItem>
                                    <MenuItem value="Sao Tome+Principe">Sao Tome and Principe</MenuItem>
                                    <MenuItem value="Saudi Arabia">Saudi Arabia</MenuItem>
                                    <MenuItem value="Senegal">Senegal</MenuItem>
                                    <MenuItem value="Seychelles">Seychelles</MenuItem>
                                    <MenuItem value="Sierra Leone">Sierra Leone</MenuItem>
                                    <MenuItem value="Singapore">Singapore</MenuItem>
                                    <MenuItem value="Slovakia">Slovakia</MenuItem>
                                    <MenuItem value="Slovenia">Slovenia</MenuItem>
                                    <MenuItem value="Solomon Islands">Solomon Islands</MenuItem>
                                    <MenuItem value="Somalia">Somalia</MenuItem>
                                    <MenuItem value="South Africa">South Africa</MenuItem>
                                    <MenuItem value="Spain">Spain</MenuItem>
                                    <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
                                    <MenuItem value="Sudan">Sudan</MenuItem>
                                    <MenuItem value="Suriname">Suriname</MenuItem>
                                    <MenuItem value="Swaziland">Swaziland</MenuItem>
                                    <MenuItem value="Sweden">Sweden</MenuItem>
                                    <MenuItem value="Switzerland">Switzerland</MenuItem>
                                    <MenuItem value="Syria">Syria</MenuItem>
                                    <MenuItem value="Tahiti">Tahiti</MenuItem>
                                    <MenuItem value="Taiwan">Taiwan</MenuItem>
                                    <MenuItem value="Tajikistan">Tajikistan</MenuItem>
                                    <MenuItem value="Tanzania">Tanzania</MenuItem>
                                    <MenuItem value="Thailand">Thailand</MenuItem>
                                    <MenuItem value="Togo">Togo</MenuItem>
                                    <MenuItem value="Tokelau">Tokelau</MenuItem>
                                    <MenuItem value="Tonga">Tonga</MenuItem>
                                    <MenuItem value="Trinidad+Tobago">Trinidad and Tobago</MenuItem>
                                    <MenuItem value="Tunisia">Tunisia</MenuItem>
                                    <MenuItem value="Turkey">Turkey</MenuItem>
                                    <MenuItem value="Turkmenistan">Turkmenistan</MenuItem>
                                    <MenuItem value="Turks+Caicos Is">Turks and Caicos Is</MenuItem>
                                    <MenuItem value="Tuvalu">Tuvalu</MenuItem>
                                    <MenuItem value="Uganda">Uganda</MenuItem>
                                    <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                                    <MenuItem value="Ukraine">Ukraine</MenuItem>
                                    <MenuItem value="United Arab Erimates">United Arab Emirates</MenuItem>
                                    <MenuItem value="United States of America">United States of America</MenuItem>
                                    <MenuItem value="Uraguay">Uruguay</MenuItem>
                                    <MenuItem value="Uzbekistan">Uzbekistan</MenuItem>
                                    <MenuItem value="Vanuatu">Vanuatu</MenuItem>
                                    <MenuItem value="Vatican City State">Vatican City State</MenuItem>
                                    <MenuItem value="Venezuela">Venezuela</MenuItem>
                                    <MenuItem value="Vietnam">Vietnam</MenuItem>
                                    <MenuItem value="Virgin Islands (Brit)">Virgin Islands (Brit)</MenuItem>
                                    <MenuItem value="Virgin Islands (USA)">Virgin Islands (USA)</MenuItem>
                                    <MenuItem value="Wake Island">Wake Island</MenuItem>
                                    <MenuItem value="Wallis+Futana Is">Wallis and Futana Is</MenuItem>
                                    <MenuItem value="Yemen">Yemen</MenuItem>
                                    <MenuItem value="Zaire">Zaire</MenuItem>
                                    <MenuItem value="Zambia">Zambia</MenuItem>
                                    <MenuItem value="Zimbabwe">Zimbabwe</MenuItem>
                                </Select>
                            </FormControl>

                            <div className={classes.container}>
                                <FormControl className={classes.fromControl}>
                                    <InputLabel>City</InputLabel>
                                    <Input
                                        id="city"
                                        value={this.state.city}
                                        onChange={this.handleChange}
                                    />
                                </FormControl>< br />
                            </div><br />

                            <div className={classes.container}>
                                <FormControlLabel
                                    value="tos"
                                    control={<Checkbox
                                        color="primary"
                                        checked={this.state.tos}
                                        onChange={this.handleChange} />}
                                    label="I agree to the Terms of Services"
                                    labelPlacement="end"
                                />
                            </div>
                        </div>

                        <div class="bottom-item">
                            <h2>Mental Illnesses</h2>
                            <p>Please enter which mental illnesses do you suffer from? Please check that all that apply.</p>

                            <FormControlLabel
                                value="addiction"
                                control={<Checkbox
                                    color="primary"
                                    checked={this.state.addiction}
                                    onChange={this.handleChange} />}
                                label="Addiction"
                                labelPlacement="end"
                            /><br />

                            <FormControlLabel
                                value="anxiety"
                                control={<Checkbox
                                    color="primary"
                                    checked={this.state.anxiety}
                                    onChange={this.handleChange} />}
                                label="Anxiety"
                                labelPlacement="end"
                            /><br />

                            <FormControlLabel
                                value="depression"
                                control={<Checkbox
                                    color="primary"
                                    checked={this.state.depression}
                                    onChange={this.handleChange} />}
                                label="Depression"
                                labelPlacement="end"
                            /><br />

                            <FormControlLabel
                                value="eating"
                                control={<Checkbox
                                    color="primary"
                                    checked={this.state.eating}
                                    onChange={this.handleChange} />}
                                label="Eating Disorders"
                                labelPlacement="end"
                            /><br />

                            <FormControlLabel
                                value="ocd"
                                control={<Checkbox
                                    color="primary"
                                    checked={this.state.ocd}
                                    onChange={this.handleChange} />}
                                label="OCD"
                                labelPlacement="end"
                            /><br />

                            <FormControlLabel
                                value="phobias"
                                control={<Checkbox
                                    color="primary"
                                    checked={this.state.phobias}
                                    onChange={this.handleChange} />}
                                label="Phobias"
                                labelPlacement="end"
                            /><br />

                            <FormControlLabel
                                value="ptsd"
                                control={<Checkbox
                                    color="primary"
                                    checked={this.state.ptsd}
                                    onChange={this.handleChange} />}
                                label="Post Traumatic Stress Disorder"
                                labelPlacement="end"
                            /><br />

                            <FormControlLabel
                                value="bully"
                                control={<Checkbox
                                    color="primary"
                                    checked={this.state.bully}
                                    onChange={this.handleChange} />}
                                label="Bullying"
                                labelPlacement="end"
                            /><br />
                        </div>
                    </div><div class="sign_up_button">
                        <div class="buttons">
                            <Button buttonStyle="btn--signup">Sign Up</Button>
                        </div>
                    </div>
                </form >
                <Footer />
            </body>
        );
    }
}
export default withStyles(styles)(SignUp);