import React from "react";
import Header from "./Header";
import "./HomeNav.css";
import LoginButton from "./LoginButton";
import SignButton from "./SignButton";

function HomeNav() {
    return(
        <div className="container">
            <div className="back-img">
                <div className="nav">
                    <h2 id="brand"><a href="/" id="brand-link">PsychLine</a></h2>
                    <div class="log-bt"><LoginButton /></div>
                    <div class="sign-bt"><SignButton /></div>
                </div>
                <div className="header-t">
                    <h1>your first step</h1>
                </div>
            </div>
        </div>
    );
}

export default HomeNav;