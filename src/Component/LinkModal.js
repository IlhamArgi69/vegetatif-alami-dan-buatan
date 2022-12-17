import React from "react";
import "../ComponentStyle/ModalStyle.css";
import Xicon from "../Asset/XIcon.svg";
import merunduk from "../Asset/merunduk.PNG";

const LinkModal = ({open,onClose}) => {
        if(!open) return null
    return (
        <div className="OverlayMateri">
            <div className="XContainer">
                <img onClick={onClose} src={Xicon} />
            </div>
            <div className="MateriContainer">
                <h1>Merunduk</h1>
                <img src={merunduk} />
                <p>Merunduk merupakan salah satu cara perkembangbiakan vegetatif buatan dengan memendam bagian ranting atau cabang tumbuhan ke dalam tanah. Cara ini efektif untuk menghasilkan akar baru yang akan tumbuh. Setelah akar tumbuh, selanjutnya bisa dipisahkan dari tanaman induk untuk menghasilkan individu tumbuhan baru. Cara merunduk ini biasanya dilakukan pada tumbuhan alamanda.</p>

            </div>
        </div>
    )
}

export default LinkModal