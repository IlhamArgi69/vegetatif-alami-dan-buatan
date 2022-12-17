import React from "react";
import "../ComponentStyle/ModalStyle.css";
import Xicon from "../Asset/XIcon.svg";
import okulasi from "../Asset/okulasi.PNG";

const RegModal = ({open,onClose}) => {
        if(!open) return null
    return (
        <div className="OverlayMateri">
            <div className="XContainer">
                <img onClick={onClose} src={Xicon} />
            </div>
            <div className="MateriContainer">
                <h1>Okulasi</h1>
                <img src={okulasi} />
                <p>Okulasi atau menempel adalah cara perkembangbiakan vegetatif buatan dengan 
cara menempelkan sepotong kulit pohon beserta mata tunas dari 
batang atas, sehingga dapat tumbuh dan bersatu membentuk 
individu baru.
 </p>
                
            </div>
        </div>
    )
}

export default RegModal