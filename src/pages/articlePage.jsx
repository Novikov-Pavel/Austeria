import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Modal from "../components/modal";
import CALLBACK from "./../components/main/modalCallBack";

let ArticlePage = () => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <>
            <Header />
            <Footer setActive={setModalActive} />
            <Modal active={modalActive} setActive={setModalActive}>
                <CALLBACK />
            </Modal>
        </>
    );
};

export default ArticlePage;
