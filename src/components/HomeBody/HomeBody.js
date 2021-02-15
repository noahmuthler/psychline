import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import "./HomeBody.css";
import GiveGetImage from "./messages.png";
import PersonalImage from "./personalize (1).png";
import DiscoverImage from "./discover.png";
import StartImage from "./start.png";
import Fade from "react-reveal/Fade";
import BoyAvatar from "./smiling_face_of_a_child.svg";
import GirlAvatar from "./Caricatura_de_una_chica_soriendo.svg";
import Footer from "../Home/Footer";

export default function HomeBody() {
    return(
        <div>
            <h2 className="body-give-title">get help, give help</h2>
            <p className="body-give-text">connect with someone who understands</p>
            <p className="body-give-text give-text-p-two">PsychLine is a free platform where you can chat with people who are going through similar problems, but also have similar interests! at PyschLine you are in complete control of confedentiality, who you chat with, and how many people you want to talk to. start your journey today!</p>
            <img src={GiveGetImage} className="give-img"/>
            <h2 className="works-t">how it works</h2>
            <hr className="rule"/>
            <Fade big>
                <div className="works-components">
                    <div className="components-divs">
                        <h3 className="works-components-t">personalize</h3>
                        <p className="works-components-p">you will be able to personalize your profile by selecting what you are interested in and what you are stuggling with. this will allow us to be able to connect you to people just like you!</p>
                        <img src={PersonalImage} className="works-img" />
                    </div>
                    <div className="components-divs">
                        <h3 className="works-components-t">discover</h3>
                        <p className="works-components-p">after signing up, you will have the oppurtunity to meet new and exciting people! at any point you will be able to continuing conversations or branch out and discover!</p>
                        <img src={DiscoverImage} className="works-img" />
                    </div>
                    <div className="components-divs">
                        <h3 className="works-components-t">start</h3>
                        <p className="works-components-p">start chatting 1-on-1 or in a group chat for FREE! click the sign up button below to personalize your account, discover new people, and begin your mental health journey!</p>
                        <img src={StartImage} className="works-img" />
                    </div>
                </div>
            </Fade>
            <h2 className="mission">our mission</h2>
            <hr className="rule"></hr>
            <Fade big>
                <p className="mission-p">our mission here at PsychLine is to provide the oppurtunity for people to take the first step in their mental health journey in a safe enviornment. we hope to change the stigma of people feeling the need to be ashamed of their mental health struggles. our platform was also designed for people who cannot afford a psychiatrist's fee. our main motivation is to provide an outlet for people who would not have any other option if not for PsychLine. 

                </p>
                <div className="mission-btn-container"><a href="/about"><button className="mission-btn">about us</button></a></div>
            </Fade>
            <h2 className="mission">testimonials</h2>
            <hr className="rule"></hr>
            <p className="mission-p">find people to help you on your path to mental clarity.</p>
            <Fade bottom>
                <div className="testimonials">
                    <div className="testimonial-cards">
                        <img src={GirlAvatar} className="card-avatar" />
                        <p className="card-p">" What a cool website. Love it! "</p>
                        <p className="card-p">- Erica, 30</p>
                    </div>
                    <div className="testimonial-cards">
                        <img src={GirlAvatar} className="card-avatar" />
                        <p className="card-p">" This website saved my life. "</p>
                        <p className="card-p">- Angela, 26</p>
                    </div>
                    <div className="testimonial-cards">
                        <img src={BoyAvatar} className="card-avatar" />
                        <p className="card-p">" So happy to have stumbled across this.
                        "
                        </p>
                        <p className="card-p">- Alex, 18</p>
                    </div>
                    <div className="testimonial-cards">
                        <img src={BoyAvatar} className="card-avatar" />
                        <p className="card-p">" I've been looking for something like this
                        for a long time. I'm happy to see it around. "
                        </p>
                        <p className="card-p">- Eric, 24</p>
                    </div>
                </div>
            </Fade>
            <Footer />
        </div>
    );
}