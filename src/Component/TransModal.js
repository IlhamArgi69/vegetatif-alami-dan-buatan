import React from "react";
import "../ComponentStyle/ModalStyle.css";
import Xicon from "../Asset/XIcon.svg";
import mengenten from "../Asset/mengenten.PNG";

const TransModal = ({open,onClose}) => {
        if(!open) return null
    return (
        <div className="OverlayMateri">
            <div className="XContainer">
                <img onClick={onClose} src={Xicon} />
            </div>
            <div className="MateriContainer">
                <h1>Mengenten</h1>
                <img src={mengenten} />
                <p>Menyambung adalah teknik perkembangbiakan vegetatif buatan dengan menggabungkan batang bawah dan batang atas dua tanaman yang sejenis. Menyambung sering pula disebut mengenten. Tujuan menyambung ialah menggabungkan sifat-sifat unggul dari dua tumbuhan, sehingga diperoleh satu tumbuhan yang memiliki sifat-sifat unggul.</p>

            </div>
        </div>
    )
}

export default TransModal