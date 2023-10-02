import { React , useState } from "react";
import "./Generate.css";
import GenerateSlide1 from "../generate1/GenerateSlide1";
import GenerateSlide2 from "../generate2/GenerateSlide2";
import GenerateSlide3 from "../generate3/GenerateSlide3";
import GenerateSlide4 from "../generate4/GenerateSlide4";

function GeneratePage(){

    var slides = [ "Generate-Show-Slide--1", "Generate-Show-Slide-0", "Generate-Show-Slide-1" , "Generate-Show-Slide-2" , "Generate-Show-Slide-3", "Generate-Show-Slide-4" ];
    const [ currentSlide , setCurrentSlide ] = useState(2);
    const [ opCode , setOpCode ] = useState(0);
    const [ initialGen , setInitialGen ] = useState("");
    const [ intialMessages , setInitialMessages ] = useState([])
    const [ finalGen , setFinalGen ] = useState("");

    const nextSlide = () => {
        setCurrentSlide(currentSlide+1)
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide-1)
    }

    const firstSlide = () => {
        setCurrentSlide(2)
    }

    //setTimeout( inc_slide , 4000 )

    return (<div className="Generate-Main-Container">
        <div className={"Generate-Vertical-Container " + slides[currentSlide]}>
            <div className="Generate-Slide"></div>
            <div className="Generate-Slide"></div>
            <div className="Generate-Slide">
                <GenerateSlide1 setOpCode={setOpCode} nextSlide={nextSlide} prevSlide={prevSlide}></GenerateSlide1>
            </div>
            <div className="Generate-Slide">
                <GenerateSlide2 opCode={opCode} setInitialGen={setFinalGen} setInitialMessages={setInitialMessages} prevSlide={prevSlide} nextSlide={nextSlide}></GenerateSlide2>
            </div>
            <div className="Generate-Slide">
            <GenerateSlide3 opCode={opCode} finalGen={finalGen} setFinalGen={setFinalGen} initialGen={initialGen} initialMessages={intialMessages} prevSlide={prevSlide} nextSlide={nextSlide}></GenerateSlide3>
            </div>
            <div className="Generate-Slide">
            <GenerateSlide4 finalGen={finalGen} prevSlide={prevSlide} nextSlide={nextSlide} firstSlide={firstSlide}></GenerateSlide4>
            </div>
        </div>
    </div>)
}

export default GeneratePage;