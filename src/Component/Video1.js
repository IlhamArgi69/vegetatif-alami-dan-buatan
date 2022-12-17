import React from "react";
import { Link } from "react-router-dom";
import "../ComponentStyle/Screen2Style.css";
import ArrowLeft from "../Asset/ArrowLeft.svg";
import ArrowRight from "../Asset/ArrowRight.svg";

const Video1 =({play})=> {
 return (
   <div className="ScreenContainer">
    <h2>Quiz</h2>
      <div className="IntroContainer">
          <p>Klik tombol "Mulai" dibawah untuk memulai dan mengerjakan Quiz</p>
          <button className="buttonQuiz"><a className="linkquiz" href="https://quizizz.com/join?gc=02139307" target="_blank">Mulai Quiz</a></button>
      </div>
      <div className="ArrowContainer">
      <Link className="Link" to="/Screen6">
                    <img onClick={play} src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="">
                    <img onClick={play} src={ArrowRight} alt='panah' />
                </Link>
      </div>
    </div>
 )
}


export default Video1