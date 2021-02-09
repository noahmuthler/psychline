import React from "react";
import Header from "./Header";
import "./HomeNav.css";
import LoginButton from "./LoginButton";

function HomeNav() {
    return(
        <div className="container">
            <div className="back-img">
                <div className="nav">
                    <nav>
                        <ul className="home-nav">
                            <li><a href="/">PsychLine</a></li>
                            <li><a><LoginButton /></a></li>
                            <li><a href="/signup">sign up</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="header-t">
                    <h1>your first step</h1>
                </div>
            </div>
        </div>
    );
}

export default HomeNav;