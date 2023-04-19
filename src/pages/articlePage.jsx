import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Modal from "../components/modal";
import CALLBACK from "./../components/main/modalCallBack";

let ArticlePage = () => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div style={{maxWidth:1440, margin: 'auto' }}>
            <Header />
            <Footer setActive={setModalActive} />
            <Modal active={modalActive} setActive={setModalActive}>
                <CALLBACK />
            </Modal>
        </div>
    );
};

export default ArticlePage;
