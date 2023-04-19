import React, { useState } from "react";
import HEADER from "../components/header";
import FOOTER from "../components/footer";
import BANNER from "../components/main/banner";
import SECONDDISPLAY from "../components/main/secondDisplay";
import ADVANTAGES from "../components/main/advantages";
import Modal from "../components/modal";
import CALLBACK from "../components/main/modalCallBack";
import CATALOG from "../components/main/catalog";
import ARCTITLES from "../components/main/arcticles";
import FAQ from "../components/main/FAQ";


function Main() {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div style={{maxWidth:1440, margin: 'auto' }}>
            <HEADER />
            <BANNER />
            <SECONDDISPLAY />
            <ADVANTAGES />
            <CATALOG />
            <ARCTITLES />
            <FAQ />
            <FOOTER setActive={setModalActive}/>
            <Modal active={modalActive} setActive={setModalActive}>
                <CALLBACK />
            </Modal>
        </div>
    );
}

export default Main;
