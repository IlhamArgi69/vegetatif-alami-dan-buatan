import React from "react";
import "../ComponentStyle/ModalStyle.css";
import Xicon from "../Asset/XIcon.svg";
import setek from "../Asset/setek.PNG";

const FinitiveModal = ({open,onClose}) => {
        if(!open) return null
    return (
        <div className="OverlayMateri">
            <div className="XContainer">
                <img onClick={onClose} src={Xicon} />
            </div>
            <div className="MateriContainer">
                <h1>Setek</h1>
                <img src={setek} />
                <p>Setek merupakan cara perkembangbiakan melalui penggunaan bagian batang atau daun dari tumbuhan. Cara setek bisa kita lakukan untuk memperbanyak tumbuhan singkong, tebu, kangkung atau mawar. Cara melakukan setek adalah dengan memotong batang secara miring, kemudian batang yang sudah dipotong tersebut ditanam ke tanah yang bagus dan gembur. Mudah bukan? Namun, kita juga harus memerhatikan cara pemotongan batang karena akan berpengaruh pada hasil seteknya. Jika penampang batang yang dipotong lebih lebar, maka jumlah akar akan tumbuh lebih banyak. Jika akar yang tumbuh banyak, maka lebih banyak juga mineral atau unsur hara yang bisa diserap tumbuhan hasil setek tersebut. Selain itu, hasil setek akan tumbuh lebih kokoh terlebih jika ditanamkan ke dalam tanah yang subur.</p>
            </div>
        </div>
    )
}

export default FinitiveModal