import React from "react";
import HomeBody from "../HomeBody/HomeBody";
import "./HomeNav.css";
import LoginButton from "./LoginButton";
import SignButton from "./SignButton";
import Fade from "react-reveal/Fade";

function HomeNav() {
    return(
        <div>
            <div className="container">
                <div className="back-img">
                    <div className="nav">
                        <h2 id="brand"><a href="/" id="brand-link">PsychLine</a></h2>
                        <div class="log-bt"><LoginButton /></div>
                        <div class="sign-bt"><SignButton /></div>
                    </div>
                    <div className="header-t">
                        <Fade bottom>
                            <h1>your first step</h1>
                        </Fade>
                    </div>
                </div>
            </div>
            <HomeBody />
        </div>
    );
}

export default HomeNav;