import React from "react";
import "../ComponentStyle/ModalStyle.css";
import Xicon from "../Asset/XIcon.svg";
import cangkok from "../Asset/cangkok.PNG";

const AuxModal = ({open,onClose}) => {
        if(!open) return null
    return (
        <div className="OverlayMateri">
            <div className="XContainer">
                <img onClick={onClose} src={Xicon} />
            </div>
            <div className="MateriContainer">
                <h1>Cangkok</h1>
                <img src={cangkok} />
                <p>Mencangkok adalah cara perkembangbiakan vegetatif buatan tumbuhan dengan menumbuhkan akar pada cabang atau batang tanaman. Bagaimana caranya? Cara melakukan cangkok ini cukup mudah yakni dengan menguliti bagian batang yang berkambium lalu menempelkan tanah yang dibungkus menggunakan serabut kelapa atau plastik. Setelah itu, lubangi plastik untuk menyuplai oksigen. Cangkok yang berhasil terlihat dari akar-akar yang tumbuh di bagian yang sudah ditutup tanah dan plastik tersebut. Setelah lama, akar tersebut akan tumbuhan menjadi tumbuhan kecil dan kita bisa mulai menanamnya di tanah hingga dewasa.</p>

            </div>
        </div>
    )
}

export default AuxModal