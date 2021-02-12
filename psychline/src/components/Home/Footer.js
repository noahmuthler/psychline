import React from 'react';
import "./Footer.css";
import logo from "./brain.jpg";

export default function Footer() {
    return (
        <div>
        <div className="footerContainer">
            <div>
                <img src={logo} className="footerImg"/>
            </div>
            <div className="footerText">
                <div class="footerFirstCol">
                    <h4>support</h4>
                    <div className="footerItem">help</div>
                    <div className="footerItem">forget password</div>
                    <div className="footerItem">contact PsychLine</div>
                </div>
                <div class="footerSecondCol">
                    <h4>company</h4>
                    <div className="footerItem" href="./AboutUs">about</div>
                    <div className="footerItem">social media</div>                   
                </div>
                <div class="footerThirdCol">
                    <h4>terms & policies</h4>
                    <div className="footerItem">policies</div>
                    <div className="footerItem">terms of use</div>
                    <div className="footerItem">code of conduct</div>
                    <div className="footerItem">privacy</div>
                </div>
            </div>
            
        </div>
        <div className="footerBottomText">
            PsychLine | the first step
        </div>
        </div>
    )
}