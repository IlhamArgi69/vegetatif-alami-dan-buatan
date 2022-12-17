import React from "react";
import "../ComponentStyle/Screen2Style.css";
import ArrowLeft from "../Asset/ArrowLeft.svg";
import ArrowRight from "../Asset/ArrowRight.svg";
import { Link } from "react-router-dom";
import ilustrasi3 from "../Asset/Ilustrasi3.png";
import Lottie from "lottie-react";
import Gif1 from "../Asset/gif1.json";


const Screen2 = ({play}) => {

    const Nick = (localStorage.getItem("nick"));

    return(
        <div className="ScreenContainer">
            <Lottie className="gif1" animationData={Gif1} />
            <div className="IntroContainer">
                <p>Halo, di game edukasi ini kita akan mempelajari tentang vegetatif alami dan vegetatif buatan.</p>
            </div>
            <Link className="Link" to="/Screen5">
                <img className="first" onClick={play} src={ArrowRight} alt='panah' />
            </Link>
        </div>

    )
}
export default Screen2;