import React from "react";
import ArrowLeft from "../Asset/ArrowLeft.svg"
import ArrowRight from "../Asset/ArrowRight.svg"
import { Link } from "react-router-dom";
import "../ComponentStyle/Screen3Style.css";


const Screen6 =({play})=> {

    

    return(
    
            <div className="ScreenContainer">
                <h2>Artikel</h2>
                <div className="IntroContainer">
                    <p>Cek dan baca artikel di bawah ini untuk lebih dapat memahami materi tadi
                    </p>
                    <button><a className="linkquiz" href="https://id.wikipedia.org/wiki/Reproduksi_vegetatif" target="_blank">Lihat Artikel</a></button>
                </div>

                <div className="ArrowContainer">
                <Link className="Link" to="/Video">
                    <img onClick={play} src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="/Video1">
                    <img onClick={play} src={ArrowRight} alt='panah' />
                </Link>
                </div>
            </div> 
    )
}

export default Screen6;