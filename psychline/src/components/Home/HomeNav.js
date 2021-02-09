import React from "react";
import Header from "./Header";
import "./HomeNav.css";

function HomeNav() {
    return(
        <div className="container">
            <div className="back-img">
                <div className="nav">
                    <nav>
                        <ul className="home-nav">
                            <li><a href="/">PsychLine</a></li>
                            <li><a href="/login">login</a></li>
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