import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Modal from "../components/modal";
import CALLBACK from "./../components/main/modalCallBack";
import * as DB from "../DB";
import "../SCSS/articlePage.scss";
import { Link } from "react-router-dom";
import * as Articles from "../components/main/arcticles";

let ArticlePage = () => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div style={{ maxWidth: 1440, margin: "auto" }}>
            <Header />
            <div className="ArticlePage">
                {DB.articles.map((e) => {
                    return (
                        <Link to={`${Articles.transliterate(e.title)}`} className="ArticlePage__single">
                            {e.img ? (
                                <img className="ArticlePage__single__img"alt={e.id}src={e.img} />
                            ) : (
                                <div className="ArticlePage__single__img" style={{
                                        backgroundColor:
                                            "#" +
                                            `${Math.floor(
                                                Math.random() * 9999
                                            ).toString(16)}`,
                                    }}
                                ></div>
                            )}
                            <p className="ArticlePage__single__title">{e.title}</p>
                            <p className="ArticlePage__single__subtitle">{e.subTitle}</p>
                        </Link>
                    );
                })}
            </div>
            <Footer setActive={setModalActive} />
            <Modal active={modalActive} setActive={setModalActive}>
                <CALLBACK />
            </Modal>
        </div>
    );
};

export default ArticlePage;
