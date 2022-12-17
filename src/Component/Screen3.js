import React from "react";

import ArrowLeft from "../Asset/ArrowLeft.svg"
import ArrowRight from "../Asset/ArrowRight.svg"
import { Link } from "react-router-dom";
import "../ComponentStyle/Screen2Style.css";
import gif3 from "../Asset/gif3.json";
import Lottie from "lottie-react"


const Screen3 =({play})=> {

    const Nick = (localStorage.getItem("nick"));

    return(
    
            <div className="ScreenContainer">
                <h2>Vegetatif Alami</h2>
                <Lottie className="tanaman" animationData={gif3} />
                <div className="IntroContainer">
                    
                    <p>Tumbuhan sebagai makhluk hidup punya kemampuan reproduksi. Reproduksi pada tumbuhan dapat dilakukan secara vegetatif (tak kawin) dan generatif (kawin).</p>
                </div>
                <div className="ArrowContainer">
                <Link className="Link" to="/Screen5">
                    <img onClick={play} src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="/Screen4">
                    <img onClick={play} src={ArrowRight} alt='panah' />
                </Link>
            </div>
            </div> 
    )
}

export default Screen3;