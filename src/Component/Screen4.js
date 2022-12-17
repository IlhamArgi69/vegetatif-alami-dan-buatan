import React from "react";
import ArrowLeft from "../Asset/ArrowLeft.svg"
import ArrowRight from "../Asset/ArrowRight.svg"
import { Link } from "react-router-dom";
import "../ComponentStyle/Screen3Style.css";
import gif4 from "../Asset/gif4.json";
import Lottie from 'lottie-react';



const Screen4 =({play})=> {

    const Nick = (localStorage.getItem("nick"));

    return(
    
            <div className="ScreenContainer">
                  <h2>Vegetatif Buatan</h2>
                  <Lottie className="tanaman" animationData={gif4} />
                <div className="IntroContainer">
                    <p>Vegetatif buatan adalah perkembangbiakan pada tumbuhan yang dibantu atau sengaja dilakukan oleh manusia. Tujuan dari perkembangbiakan vegetatif buatan yakni untuk meningkatkan mutu dan jumlah hasil.</p>
                </div>
                <div className="ArrowContainer">
                <Link className="Link" to="/Screen3">
                    <img onClick={play} src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="/Card">
                    <img onClick={play} src={ArrowRight} alt='panah' />
                </Link>
            </div>
            </div> 
    )
}

export default Screen4;