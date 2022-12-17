import React from "react";
import { Link } from "react-router-dom";
import "../ComponentStyle/Screen2Style.css";
import ArrowLeft from "../Asset/ArrowLeft.svg";
import ArrowRight from "../Asset/ArrowRight.svg";
import Lottie from "lottie-react";
import Gif2 from "../Asset/gif2.json";


const Video =({play})=> {
 return (
   <div className="ScreenContainer">
      <h2>Video</h2>
      <div className="IntroContainer">
          <iframe src='https://www.youtube.com/embed/E2AT4Iv-ojM'
                  frameBorder='0'
                  allow='autoplay; encrypted-media'
                  allowFullScreen
                  tittle='video'
                  />
      </div>
      <div className="ArrowContainer">
        <Link  className="Link" to="/Card">
                    <img onClick={play} src={ArrowLeft} alt='panah' />
        </Link>
          <Link className="Link" to="/Animasi">
                    <img onClick={play} src={ArrowRight} alt='panah' />
          </Link>
        </div>
    </div>
 )
}


export default Video