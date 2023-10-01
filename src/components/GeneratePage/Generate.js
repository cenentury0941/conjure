import { React , useState } from "react";
import "./Generate.css";
import GenerateSlide1 from "../generate1/GenerateSlide1";

function GeneratePage(){

    var slides = [ "Generate-Show-Slide-1" , "Generate-Show-Slide-2" , "Generate-Show-Slide-3", "Generate-Show-Slide-4" ];
    const [ currentSlide , setCurrentSlide ] = useState(0);

    const inc_slide = () => {
        setCurrentSlide( (currentSlide+1)%4 )
        setTimeout( inc_slide , 4000 )
    }

    //setTimeout( inc_slide , 4000 )

    return (<div className="Generate-Main-Container">
        <div className={"Generate-Vertical-Container " + slides[currentSlide]}>
            <div className="Generate-Slide">
                <GenerateSlide1></GenerateSlide1>
            </div>
            <div className="Generate-Slide"></div>
            <div className="Generate-Slide"></div>
            <div className="Generate-Slide"></div>
        </div>
    </div>)
}

export default GeneratePage;