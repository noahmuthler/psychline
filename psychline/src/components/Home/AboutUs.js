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
            <div class="box">
                <div><img src={noah} /></div>
                <div class="text"><h3>noah muthler</h3>
                <p class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>    
            </div>
            <hr></hr>
            <div class="box">
                <div><img src={kade} /></div>
                <div class="text"><h3>kade carlson</h3>
                <p class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>    
            </div>
            <hr></hr>
            <div class="box">
                <div><img src={kevin} /></div>
                <div class="text"><h3>kevin dong</h3>
                <p class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>    
            </div>
            <hr></hr>
            <div class="box">
                <div><img src={micah} /></div>
                <div class="text"><h3>micah deLattre</h3>
                <p class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>    
            </div>
            <hr></hr>
            <div class="box">
                <div><img src={quintin} /></div>
                <div class="text"><h3>quintin nelson</h3>
                <p class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>    
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs;