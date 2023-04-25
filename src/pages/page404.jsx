import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../SCSS/Components/about.scss";
import Modal from "../components/modal";
import CALLBACK from "../components/main/modalCallBack";
import '../SCSS/Page404.scss'

function Page404 () {
    const [modalActive, setModalActive] = useState(false);
    return (
        <>
            <Header />
            <div className="Page404">Такой страницы не найдено <br></br> 404</div>
            <Footer setActive={setModalActive}/>
            <Modal active={modalActive} setActive={setModalActive}>
                <CALLBACK />
            </Modal>
        </>
    );
}

export default Page404;
