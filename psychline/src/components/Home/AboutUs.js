import React from 'react';
import "./AboutUs.css";
import Navbar from "../Navbar/Navbar";
import brain from "./brain.jpg";
import Footer from "./Footer";
import noah from "./noahIMG.jpeg";
import micah from "./micahIMG.jpeg";
import kevin from "./kevinIMG.jpeg";
import quintin from "./quintinIMG.jpeg";
import kade from "./kadeIMG.jpeg";

function AboutUs() {
    return (
        <div>
            <Navbar />
            <h1>a bit about us</h1>
            <div className="box">
                <div><img src={noah} /></div>
                <div className="text"><h3>noah muthler</h3>
                    <p className="text">noah is a college student at Pennsylvania State University and grew up in central pennslyvania. his interests include programming, tinkering with electronics, and NBA basketball. noah has assisted with PsychLine's website user interface and will lead the development of the mobile application. he will also assist with the business side of the company. noah will also he has been impacted personally by mental health, this was a driving force in the creation of PsychLine. noah's goal for the PsychLine is to provide a platform that users can feel comfortable to open up about their personal struggles. noah is excited to build PsychLine from the ground up through various technologies and business strategies.</p>
                </div>
            </div>
            <hr></hr>
            <div className="box">
                <div><img src={kade} /></div>
                <div className="text"><h3>kade carlson</h3>
                    <p className="text">kade is an honors student at Pennsylvania State University. kade grew up in several different areas but graduated high school in upstate new york. kade's interests include programming, spacecraft design, astronomy, robotics, video games, and chess. kade is responsible for most of PsychLine's codebase. kade will also take care of many of the business aspects of the company. kade has been diagnosed with several different mental disorders in the past including anxiety and depression. his personal struggles with mental health led him to help with the creation of PsychLine. kade's goal for PsychLine is to offer a place for people to take that initial step and open up about their struggles and hopefully seek more help in the future.</p>
                </div>
            </div>
            <hr></hr>
            <div className="box">
                <div><img src={kevin} /></div>
                <div className="text"><h3>kevin dong</h3>
                    <p className="text">kevin is a college student at Pennsylvania State University and grew up in southern pennsylvania. kevin's interest's include programmming, computer systems, graphic cards and designing pc from various parts. kevin is responsible for PsychLine's backend and database. kevin's plan with PsychLine is to reach as many people with mental issues, so they can reach their fellow peers and find comfort in the difficult areas in life.</p>
                </div>
            </div>
            <hr></hr>
            <div className="box">
                <div><img src={micah} /></div>
                <div className="text"><h3>micah deLattre</h3>
                    <p className="text">micah is a college student at Pennsylvania State University and grew up in central pennsylvania. his interests include developing his programming skills, following sports, working on mechanical projects, and working out. micah's favorite class is thermodynamics and is looking foward to take mechatronics and getting involved in an engineering club, SSPL, on campus. micah is responsible for app development, social media accounts, and some artwork on PsychLine. although not directly affected by mental health issues, micah has seen others in his life suffer through these hardships. motivated to assist these people, among others dealing with mental health issues, micah feels strongly about PsychLine and how it can change societies view on mental health illnesses. micah's goal for PsychLine is to create a judgement-free platform where users can take the first step in combatting mental health issues. he would like to be a driving force in attracting users to the site, and motivating them to stay on the site. micah is hard-working and motivated to make a difference in the lives of those around him. with his fellow team members by his side, the sky is the limit for PsychLine. </p>
                </div>

            </div>
            <hr></hr>
            <div className="box" id="aboutUsBottom">
                <div><img src={quintin} /></div>
                <div className="text"><h3>quintin nelson</h3>
                    <p className="text">quintin is a Schreyer honor scholar at the Pennsylvania State University. pursuing aerospace engineering, quintin has had a natural curiosity for space and engineering since he was a kid. now in college, he is interested in space structures, renewable energy, LEGOs, chess, and artistic ventures such as photography and film editing. quintin is in charge of design and writing at PsychLine. he has developed several concept art designs for the website pages and logo. he has also been involved in the business side and is currenty developing react.js skills to assist in the development of the front-end. his vision for PsychLine is to make a difference in a world of uncertainty. knowing firsthand the effects of depression, quintin knows how vital a resource like PsychLine is to those affected. </p>
                </div>
            </div>
            <Footer className="aboutUsFooter" />
        </div>
    )
}

export default AboutUs;