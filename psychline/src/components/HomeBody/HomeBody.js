import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import "./HomeBody.css";
import GiveGetImage from "./therapy.jpg";
import Fade from "react-reveal/Fade";
import Avatar from "@material-ui/core/Avatar";
import BoyAvatar from "./smiling_face_of_a_child.svg";
import GirlAvatar from "./Caricatura_de_una_chica_soriendo.svg";

export default function HomeBody() {
    return(
        <div>
            <h2 className="body-give-title">get help, give help</h2>
            <p className="body-give-text">connect with someone who understands</p>
            <p className="body-give-text">all chats remain confidential</p>
            <img src={GiveGetImage} className="give-img"/>
            <h2 className="works-t">how it works</h2>
            <hr className="rule"/>
            <Fade big>
                <div className="works-components">
                    <div>
                        <h3 className="works-components-t">personalize</h3>
                        <p className="works-components-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a nulla efficitur, viverra ipsum nec, posuere nunc. Sed eget sem ac neque efficitur tempus. Nunc quis scelerisque ex. Proin ornare, magna sed molestie mollis, erat est feugiat libero, nec bibendum erat elit imperdiet nibh.</p>
                        <img src={GiveGetImage} className="works-img" />
                    </div>
                    <div>
                        <h3 className="works-components-t">discover</h3>
                        <p className="works-components-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a nulla efficitur, viverra ipsum nec, posuere nunc. Sed eget sem ac neque efficitur tempus. Nunc quis scelerisque ex. Proin ornare, magna sed molestie mollis, erat est feugiat libero, nec bibendum erat elit imperdiet nibh.</p>
                        <img src={GiveGetImage} className="works-img" />
                    </div>
                    <div>
                        <h3 className="works-components-t">start</h3>
                        <p className="works-components-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a nulla efficitur, viverra ipsum nec, posuere nunc. Sed eget sem ac neque efficitur tempus. Nunc quis scelerisque ex. Proin ornare, magna sed molestie mollis, erat est feugiat libero, nec bibendum erat elit imperdiet nibh.</p>
                        <img src={GiveGetImage} className="works-img" />
                    </div>
                </div>
            </Fade>
            <h2 className="mission">our mission</h2>
            <hr className="rule"></hr>
            <Fade big>
                <p className="mission-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a nulla efficitur, viverra ipsum nec, posuere nunc. Sed eget sem ac neque efficitur tempus. Nunc quis scelerisque ex. Proin ornare, magna sed molestie mollis, erat est feugiat libero, nec bibendum erat elit imperdiet nibh. Proin lectus ex, consequat nec nulla in, fermentum viverra dui. Quisque id pulvinar urna. Quisque finibus gravida tortor vitae hendrerit. Mauris mollis blandit accumsan. Fusce feugiat imperdiet rhoncus. Nunc sodales consectetur lorem, a lobortis ante suscipit finibus. Nunc molestie congue risus, vitae rhoncus elit fringilla et.

                </p>
                <div className="mission-btn-container"><a href="/about"><button className="mission-btn">about us</button></a></div>
            </Fade>
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
        </div>
    );
}