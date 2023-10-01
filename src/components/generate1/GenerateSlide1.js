import React from "react";
import "./GenerateSlide1.css";
import "../GeneratePage/Generate.css";
import TypeCard from "../typecard/TypeCard";

function GenerateSlide1(){
    return(<div className="Generate-Slide1-Main-Container">
        <div className="Generate-Slide-Title">What would you like to create today?
        <div className="Generate-Slide-Content">Select one of the types of resource you'd like to begin working on from the options below!</div>
        </div>
        <div className="Generate-Slide1-TypeCard-Container">
            <TypeCard/>
            <TypeCard/>
            <TypeCard/>
            <TypeCard/>
        </div>
    </div>)
}

export default GenerateSlide1;