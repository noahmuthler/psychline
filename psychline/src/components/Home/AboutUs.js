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
                <p className="text">noah is a college student at Pennsylvania State University and grew up in central pennslyvania. his interests include programming, tinkering with electronics, and NBA basketball. noah has assisted with PsychLine's website user interface and will lead the development of the mobile application. he will also assist with the business side of the company. noah will also he has been impacted personally by mental health, this was a driving force in the creation of PsychLine. noah's goal for the PsychLine is to provide a platform that users can feel comfortable to open up about their personal struggles.</p>
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
                <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>    
            </div>
            <hr></hr>
            <div className="box">
                <div><img src={micah} /></div>
                <div className="text"><h3>micah deLattre</h3>
                <p className="text">Micah is a college student at Pennsylvania State University and grew up in central PA. His interests include developing his programming skills, following sports, working on mechanical projects, and working out. Micah's favorite class is Thermodynamics and is looking foward to take Mechatronics and getting involved in an engineering club, SSPL, on campus. Micah is responsible for app development, social media accounts, and some artwork on PsychLine. Although not directly affected by mental health issues, Micah has seen others in his life suffer through these hardships. Motivated to assist these people, among others dealing with mental health issues, Micah feels strongly about PsychLine and how it can change societies view on mental health illnesses. Micah's goal for PsychLine is to create a judgement-free platform where users can take the first step in combatting mental health issues. He would like to be a driving force in attracting users to the site, and motivating them to stay on the site. Micah is hard-working and motivated to make a difference in the lives of those around him. With his fellow team members by his side, the sky is the limit for PsychLine. </p>
                </div>    
            
            </div>
            <hr></hr>
            <div className="box" id="aboutUsBottom">
                <div><img src={quintin} /></div>
                <div className="text"><h3>quintin nelson</h3>
                <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>    
            </div>
            <Footer className="aboutUsFooter" />
        </div>
    )
}

export default AboutUs;